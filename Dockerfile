# Use uma imagem Node.js oficial como base
FROM node:18-alpine

# Instale pacotes necessários
RUN apk add --no-cache git

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie os arquivos de configuração do projeto
COPY package*.json ./

# Limpe o cache do npm e instale dependências
RUN npm cache clean --force
RUN npm install --legacy-peer-deps

# Copie todo o código fonte
COPY . .

# Tente buildar com mais detalhes e tratamento de erros
RUN npm run build || (echo "Build failed" && exit 1)

# Exponha a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "preview"]
