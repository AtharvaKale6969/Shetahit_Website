const fs = require('fs');

const html = fs.readFileSync('about.html', 'utf8');

const images = [...html.matchAll(/src="([^"]+)"/g)].map(m => m[1]).filter(src => src.includes('wp-content/uploads'));
console.log('Images used on About page:');
const uniqueImages = [...new Set(images)];
uniqueImages.forEach(img => console.log(img));

console.log('\nHeadings:');
const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('H1s:', h1s);

const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('H2s:', h2s);

const h3s = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('H3s:', h3s);

const pTags = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(p => p.length > 50);
console.log('\nParagraphs (length > 50):');
pTags.forEach(p => console.log('- ' + p));
