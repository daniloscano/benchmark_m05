import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    testTimeout: 10000,
    hookTimeout: 5000,
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js'
  }
})
