Configuração do Projeto:
Certifique-se de ter o Node.js e o npm instalados em seu sistema.

mkdir minha-api
cd minha-api
npm init -y
npm install express body-parser cors
npm install --save-dev typescript @types/node @types/express @types/body-parser @types/cors ts-node

estrutura básica do projeto
- src
  - entities
    - produtos.ts
    - compras.ts
    - enderecos.ts
  - routes
    - produtos.ts
    - compras.ts
    - enderecos.ts
  - server.ts
- tsconfig.json
