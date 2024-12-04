# Use uma imagem Node.js oficial como base
FROM node:18-alpine

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie os arquivos de configuração do projeto
COPY package*.json ./

# Instale as dependências globais e do projeto
RUN npm install -g npm@latest
RUN npm install

# Copie todo o código fonte
COPY . .

# Limpe o cache do npm e force a instalação
RUN npm cache clean --force
RUN npm install

# Construa o projeto com mais verbosidade
RUN npm run build --verbose

# Exponha a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "preview"]
