import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9000,
  },
  resolve: {
    alias: {
      src: path.resolve('src/'),
    },
  },
  plugins: [react()],
});