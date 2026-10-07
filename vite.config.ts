import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@designcodeio/threeui/style.css': path.resolve(import.meta.dirname, './src/shaders/threeui.css'),
      '@designcodeio/threeui': path.resolve(import.meta.dirname, './src/shaders/sketchbook/Sketchbook.tsx'),
    },
  },
})

