import { Router } from 'express';
import { CreateComprasController } from '../controller/compras/CreateComprasController.js';
import { DeleteComprasController } from '../controller/compras/DeleteComprasController.js';
import { GetAllComprasController } from '../controller/compras/GetAllComprasController.js';
import { GetByIdComprasController } from '../controller/compras/GetByIdComprasController.js';
import { UpdateComprasController } from '../controller/compras/UpdateComprasController.js';

const comprasRouter = Router();

// Create
const createComprasController = new CreateComprasController();
comprasRouter.post('/compras', createComprasController.handle);

// Get All
const getAllComprasController = new GetAllComprasController();
comprasRouter.get('/compras', getAllComprasController.handle);

// Get By Id
const getByIdComprasController = new GetByIdComprasController();
comprasRouter.get('/compras/:id', getByIdComprasController.handle);

// Update
const updateComprasController = new UpdateComprasController();
comprasRouter.put('/compras', updateComprasController.handle);

// Delete
const deleteComprasController = new DeleteComprasController();
comprasRouter.delete('/compras', deleteComprasController.handle);

export { comprasRouter }