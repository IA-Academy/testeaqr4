import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'

  export default defineConfig({
    plugins: [react()],
    server: {
      host: '0.0.0.0', // Permitir conexões externas
      port: process.env.PORT ? parseInt(process.env.PORT) : 3000, // Usar a porta especificada pela variável de ambiente PORT
    },
    preview: {
      host: '0.0.0.0', // Permitir conexões externas
      port: process.env.PORT ? parseInt(process.env.PORT) : 3000, // Usar a porta especificada pela variável de ambiente PORT
    }
  })
