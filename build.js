const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Run the image metadata script
console.log('Running image metadata script...');
execSync('node getImages.js', { stdio: 'inherit' });

// Run the Next.js build
console.log('Running Next.js build...');
execSync('next build', { stdio: 'inherit' });