const { execSync } = require('child_process');

// Run the image metadata script
console.log('Downloading images metadata...');
execSync('node getImages.js', { stdio: 'inherit' });

// Run the Next.js build
console.log('Running Next.js build...');
execSync('next build', { stdio: 'inherit' });