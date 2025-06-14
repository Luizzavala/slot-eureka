import { defineConfig } from 'vite';
import { resolve } from 'path';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  root: '.',
  plugins: [imagetools()],
  build: {
    outDir: 'build',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
});
