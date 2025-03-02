const { SitemapStream } = require('sitemap');
const { createWriteStream, readdirSync } = require('fs');
const path = require('path');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  // Add more static routes here
];

// Add dynamic routes for blog posts and projects
const postsDir = path.resolve(__dirname, 'src', 'posts');
const projectsDir = path.resolve(__dirname, 'src', 'projects');

const postFiles = readdirSync(postsDir).filter(file => file.endsWith('.md'));
const projectFiles = readdirSync(projectsDir).filter(file => file.endsWith('.md'));

postFiles.forEach(file => {
  const route = `/${path.basename(file, '.md')}`;
  links.push({ url: route, changefreq: 'monthly', priority: 0.7 });
});

projectFiles.forEach(file => {
  const route = `/${path.basename(file, '.md')}`;
  links.push({ url: route, changefreq: 'monthly', priority: 0.7 });
});

const sitemap = new SitemapStream({ hostname: 'https://babykaban.github.io' });
const writeStream = createWriteStream(path.resolve(__dirname, 'public', 'sitemap.xml'));

writeStream.on('finish', () => {
  console.log('Sitemap created successfully!');
});

writeStream.on('error', (err) => {
  console.error('Error creating sitemap:', err);
});

sitemap.pipe(writeStream);

links.forEach(link => sitemap.write(link));
sitemap.end();
