import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Production-ready configuration
export default defineConfig({
  plugins: [react()],
  base: '/', // ensures relative paths for CSS and JS assets
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
