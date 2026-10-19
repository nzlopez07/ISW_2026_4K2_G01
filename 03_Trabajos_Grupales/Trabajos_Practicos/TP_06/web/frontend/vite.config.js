import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Con `npm run dev`, las llamadas a /api van al servidor de Python (puerto 8080)
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://127.0.0.1:8080'
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
