import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

// Importante: Railway passa a porta via variável de ambiente
const port = process.env.PORT || 3000;

// Servir arquivos estáticos do diretório dist
app.use(express.static('dist'));

// Todas as requisições não encontradas retornam o index.html
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// Iniciar o servidor
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
