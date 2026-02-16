# OlhoDeThundera_frontend

📥 Clonando o Projeto
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo

▶️ Rodando o Projeto (Ambiente de Desenvolvimento)
🔨 Build inicial
docker compose up --build

▶️ Subir normalmente (após primeiro build)
docker compose up


O projeto ficará disponível em:

http://localhost:5173

🔄 Hot Reload

O projeto está configurado com volume Docker, então:

Alterações no código são refletidas automaticamente

Não é necessário rebuildar a cada mudança

⛔ Parar o Projeto
docker compose down


Se quiser remover volumes também:

docker compose down -v

🧹 Limpar Cache (caso dê erro de build)
docker builder prune -a
docker system prune -a --volumes


Depois:

docker compose up --build

📦 Rodar sem Docker (opcional)

Caso queira rodar localmente sem container:

npm install
npm run dev

⚙️ Variáveis de Ambiente

Caso o projeto utilize variáveis de ambiente, crie um arquivo:

.env


Exemplo:

VITE_API_URL=http://localhost:3000


Variáveis no Vite precisam começar com VITE_.

🐳 Dockerfile (Dev)

Resumo do que o container faz:

Usa Node 20 Alpine

Instala dependências

Expõe porta 5173

Executa npm run dev -- --host

📌 Comandos Úteis

Rebuild forçado:

docker compose up --build --no-cache


Ver logs:

docker compose logs -f


Entrar no container:

docker exec -it react_dev sh
