import { defineConfig } from 'vite';

/** В собранном HTML ставит <link rel="stylesheet"> перед <script>, чтобы стили загружались первыми */
function styleBeforeScript() {
  return {
    name: 'style-before-script',
    transformIndexHtml(html) {
      return html.replace(
        /(\s*)(<script[^>]+type="module"[^>]*><\/script>)(\s*)(<link[^>]+rel="stylesheet"[^>]*>)/,
        '$1$4$3$2'
      );
    },
  };
}

export default defineConfig({
  root: '.',
  // В GitHub Actions задаётся GITHUB_PAGES_BASE (например /repo-name/), локально — относительные пути
  base: process.env.GITHUB_PAGES_BASE || './',
  publicDir: 'public',
  plugins: [styleBeforeScript()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html',
      },
      output: {
        // Плоская структура assets/ — иначе пути в CSS (шрифты) и в index.html ломаются
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',
      },
    },
  },
});
