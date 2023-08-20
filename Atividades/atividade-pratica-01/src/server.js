import express from 'express';
import cors from 'cors';


import { mainRouter } from './routes/main.js';
import { estadoRouter } from './routes/estado.js';
import { cidadeRouter } from './routes/cidades.js';
import { doacaoRouter } from './routes/compras.js';
import { localRouter } from './routes/endereco.js';
import { pessoaRouter } from './routes/usuarios.js';
import { tipoRouter } from './routes/produto.js';

const PORT = 3333;

const app = express();
app.use(express.json());
app.use(cors())

// Routes:
app.use(mainRouter);
app.use(estadoRouter);
app.use(cidadeRouter);
app.use(comprasRouter);
app.use(enderecoRouter);
app.use(usuariosRouter);
app.use(produtoRouter);


// Server - start/listen
app.listen(PORT, () => {

    console.log(`[SERVER] Server is running on port ${PORT}`);

});
