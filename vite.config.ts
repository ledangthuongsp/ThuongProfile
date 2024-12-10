import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/home",
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "@/styles/colors.css"; @import "@/styles/fonts.css";`,
      },
    },
  },
});
