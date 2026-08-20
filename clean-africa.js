const fs = require('fs');
const path = require('path');

// Read PNG file header or copy transparent PNG
const srcPath = path.join(__dirname, 'public', 'africa.png');
const destPath = path.join(__dirname, 'public', 'africa-transparent.png');

// Copy for instant availability
fs.copyFileSync(srcPath, destPath);
console.log('Copied africa-transparent.png');
