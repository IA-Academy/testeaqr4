import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Certifique-se de que a pasta de build está correta
  },
  server: {
    host: true,  // Permite acesso externo
    port: 3000
  }
})
