import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]' // This ensures that the original file extension is retained
      }
    }
  },
  assetsInclude: ['**/*.mp4'] // Add this line to specify that .mkv files should be treated as assets
})
