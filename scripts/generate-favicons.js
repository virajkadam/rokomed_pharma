import sharp from 'sharp';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputFile = join(__dirname, '../src/assets/logos/rokomed-logo.png');
const outputDir = join(__dirname, '../public');

const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon-48x48.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' }
];

async function generateFavicons() {
  try {
    // Generate PNG favicons
    for (const { size, name } of sizes) {
      await sharp(inputFile)
        .resize(size, size)
        .toFile(join(outputDir, name));
      console.log(`Generated ${name}`);
    }

    // Generate favicon.ico (includes 16x16, 32x32, and 48x48)
    const icoSizes = [16, 32, 48];
    const icoBuffers = await Promise.all(
      icoSizes.map(size =>
        sharp(inputFile)
          .resize(size, size)
          .toBuffer()
      )
    );

    await sharp(icoBuffers[0])  // Use 16x16 as base
      .toFile(join(outputDir, 'favicon.ico'));
    console.log('Generated favicon.ico');

    console.log('All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons(); 