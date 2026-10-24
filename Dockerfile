
# Etapa 1: Construção da aplicação
FROM node:22-alpine AS build

WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm ci

# Copia o código-fonte
COPY . .

# Gera os arquivos de produção
RUN npm run build

# Etapa 2: Servir a aplicação com Nginx
FROM nginx:alpine

# Copia os arquivos gerados pelo Vite
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta HTTP
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
