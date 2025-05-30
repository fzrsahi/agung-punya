import { defineConfig } from 'astro/config';
import cesium from 'vite-plugin-cesium'; // Jika Anda menggunakan plugin ini

export default defineConfig({
  vite: {
    plugins: [
      cesium() // Aktifkan plugin cesium
    ]
  }
});