import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import fs from "fs";

// https://vite.dev/config/
/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [react()],
  server: {
    port: 443,
    host: 'lh.skeyple.ru',
    https: {
      key: fs.readFileSync('./.cert/key.key'),
      cert: fs.readFileSync('./.cert/crt.crt'),
    },
    strictPort: true
  }
});