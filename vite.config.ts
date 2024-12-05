import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.PORT || '3000'),
    host: true
  },
  build: {
    outDir: 'dist',
    // Garantir que os assets sejam incluídos corretamente
    assetsDir: 'assets',
    // Desabilitar source maps em produção
    sourcemap: false,
    // Otimizar o build
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'styled-components']
        }
      }
    }
  }
})
