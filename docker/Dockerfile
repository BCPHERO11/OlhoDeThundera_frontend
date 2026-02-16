# Usa imagem leve do node
FROM node:20-alpine

# Diretório dentro do container
WORKDIR /app

# Copia package.json primeiro (melhor cache)
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia restante do projeto
COPY . .

# Expõe porta do Vite
EXPOSE 5173

# Comando para rodar em dev
CMD ["npm", "run", "dev", "--", "--host"]
