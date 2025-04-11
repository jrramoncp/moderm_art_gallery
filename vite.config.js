import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/moderm_art_gallery/', // Necesario para despliegue en GitHub Pages
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Entrada principal
        location: resolve(__dirname, 'html/location.html'), // Segunda página
      },
    },
  },
});