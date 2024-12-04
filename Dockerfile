# Use uma imagem Node.js oficial como base
FROM node:18-alpine

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie os arquivos de configuração do projeto
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o resto dos arquivos do projeto
COPY . .

# Construa o projeto
RUN npm run build

# Exponha a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "preview"]
