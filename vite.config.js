import { defineConfig } from 'vite';

export default defineConfig({
  // TODO: REPLACE 'my-portfolio' WITH YOUR ACTUAL GITHUB REPO NAME
  // Example: if repo is github.com/alex/cv, use '/cv/'
  base: '/my-portfolio/', 
  build: {
    minify: 'terser',
    assetsDir: 'assets',
  }
});
