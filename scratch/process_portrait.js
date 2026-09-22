const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processPortrait() {
  const inputPath = '/home/srk/.gemini/antigravity-ide/brain/31204897-9596-4ece-8225-c30101b4ca9c/.user_uploaded/media_1790015755488.jpg';
  console.log('Reading from:', inputPath);

  // 1. Load original metadata
  const src = sharp(inputPath);
  const meta = await src.metadata();
  console.log('Input size:', meta.width, meta.height);

  // 2. High-quality 2x upscale with Lanczos3 resampling
  const targetW = meta.width * 2; // 2048
  const targetH = meta.height * 2; // 1528

  const upscaledBuf = await sharp(inputPath)
    .resize(targetW, targetH, {
      kernel: sharp.kernel.lanczos3,
      fit: 'fill'
    })
    .toBuffer();

  // 3. Apply professional tone curve, micro-contrast and sharpening
  const enhancedRaw = await sharp(upscaledBuf)
    .linear(1.06, -6) // deep, clean studio blacks
    .sharpen({
      sigma: 1.25,
      m1: 1.0,
      m2: 2.2,
      x1: 2,
      y2: 10,
      y3: 20
    })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = enhancedRaw;
  const w = info.width;
  const h = info.height;
  console.log('Upscaled dimensions:', w, h);

  // 4. Boundary flood-fill to identify pure background
  const isBg = new Uint8Array(w * h);
  const queue = new Int32Array(w * h);
  let head = 0;
  let tail = 0;

  function push(x, y) {
    const idx = y * w + x;
    if (isBg[idx] === 0) {
      const pIdx = idx * 3;
      const b = (data[pIdx] + data[pIdx + 1] + data[pIdx + 2]) / 3;
      if (b >= 242) {
        isBg[idx] = 1;
        queue[tail++] = idx;
      }
    }
  }

  // Push borders
  for (let x = 0; x < w; x++) {
    push(x, 0);
    push(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    push(0, y);
    push(w - 1, y);
  }

  // BFS
  while (head < tail) {
    const idx = queue[head++];
    const x = idx % w;
    const y = Math.floor(idx / w);

    if (x > 0) push(x - 1, y);
    if (x < w - 1) push(x + 1, y);
    if (y > 0) push(x, y - 1);
    if (y < h - 1) push(x, y + 1);
  }

  // 5. Build RGBA buffer with soft edge anti-aliasing & defringing
  const rgba = Buffer.alloc(w * h * 4);
  const featherRadius = 2;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = y * w + x;
      const outIdx = idx * 4;
      const pIdx = idx * 3;
      const r = data[pIdx];
      const g = data[pIdx + 1];
      const b = data[pIdx + 2];
      const luma = (r + g + b) / 3;

      if (isBg[idx] === 1) {
        rgba[outIdx] = 0;
        rgba[outIdx + 1] = 0;
        rgba[outIdx + 2] = 0;
        rgba[outIdx + 3] = 0;
      } else {
        // Check distance to background for edge smoothing
        let hasBgNeighbor = false;
        for (let dy = -featherRadius; dy <= featherRadius && !hasBgNeighbor; dy++) {
          const ny = y + dy;
          if (ny < 0 || ny >= h) continue;
          for (let dx = -featherRadius; dx <= featherRadius; dx++) {
            const nx = x + dx;
            if (nx < 0 || nx >= w) continue;
            if (isBg[ny * w + nx] === 1) {
              hasBgNeighbor = true;
              break;
            }
          }
        }

        if (hasBgNeighbor && luma > 200) {
          // Soft edge blending
          const alphaNorm = Math.max(0, Math.min(1, (255 - luma) / 55));
          const a = Math.round(alphaNorm * 255);
          // Defringe from white background
          const defringed = Math.max(0, Math.min(255, Math.round((luma - 255 * (1 - alphaNorm)) / Math.max(0.05, alphaNorm))));
          rgba[outIdx] = defringed;
          rgba[outIdx + 1] = defringed;
          rgba[outIdx + 2] = defringed;
          rgba[outIdx + 3] = a;
        } else {
          rgba[outIdx] = r;
          rgba[outIdx + 1] = g;
          rgba[outIdx + 2] = b;
          rgba[outIdx + 3] = 255;
        }
      }
    }
  }

  // 6. Save cut out image
  const outPng = path.join(__dirname, '../public/raghul-bw.png');
  await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
    .png({ compressionLevel: 8 })
    .toFile(outPng);

  console.log('Saved high-res portrait to:', outPng);
}

processPortrait().catch(err => {
  console.error('Error processing portrait:', err);
  process.exit(1);
});
