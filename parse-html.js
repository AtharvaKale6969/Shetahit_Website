const fs = require('fs');

const html = fs.readFileSync('homepage.html', 'utf8');

const images = [...html.matchAll(/src="([^"]+)"/g)].map(m => m[1]).filter(src => src.includes('wp-content/uploads'));
console.log('Images used on homepage:');
const uniqueImages = [...new Set(images)];
uniqueImages.forEach(img => console.log(img));

console.log('\nHeadings:');
const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('H1s:', h1s);

const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('H2s:', h2s);

const h3s = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('H3s:', h3s);

// Also look for background images
const bgImages = [...html.matchAll(/url\(([^)]+)\)/g)].map(m => m[1]).filter(src => src.includes('wp-content/uploads'));
console.log('\nBackground Images:');
const uniqueBg = [...new Set(bgImages)];
uniqueBg.forEach(img => console.log(img));
