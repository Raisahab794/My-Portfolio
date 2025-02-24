import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Add this line to import the path module

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase warning limit
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'three'],
          utils: ['@react-three/fiber', '@react-three/drei']
        }
      }
    }
  }
})
