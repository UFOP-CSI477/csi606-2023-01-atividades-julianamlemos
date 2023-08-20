import { Router } from 'express';
import { CreateProdutoController } from '../controller/produto/CreateProdutoController.js';
import { DeleteProdutoController } from '../controller/produto/DeleteProdutoController.js';
import { GetAllProdutoController } from '../controller/produto/GetAllProdutoController.js';
import { GetByIdProdutoController } from '../controller/produto/GetByIdProdutoController.js';
import { UpdateProdutoController } from '../controller/produto/UpdateProdutoController.js';

const produtoRouter = Router();

// Create
const createProdutoController = new CreateProdutoController();
produtoRouter.post('/produto', createProdutoController.handle);

// Get All
const getAllProdutoController = new GetAllProdutoController();
produtoRouter.get('/produto', getAllProdutoController.handle);

// Get By Id
const getByIdProdutoController = new GetByIdProdutoController();
produtoRouter.get('/produto/:id', getByIdProdutoController.handle);

// Update
const updateProdutoController = new UpdateProdutoController();
produtoRouter.put('/produto', updateProdutoController.handle);

// Delete
const deleteProdutoController = new DeleteProdutoController();
produtoRouter.delete('/produto', deleteProdutoController.handle);

export { produtoRouter }