import { Router } from 'express';

import { CreateEnderecoController } from '../controller/endereco/CreateLocalController.js';
import { GetAllEnderecoController } from '../controller/endereco/GetAllLocalController.js';
import { GetByIdEnderecoController } from '../controller/endereco/GetByIdLocalController.js';
import { UpdateEnderecoController } from '../controller/endereco/UpdateLocalController.js';
import { DeleteEnderecoController } from '../controller/endereco/DeleteLocalController.js';

const enderecoRouter = Router();

// Create
const createEnderecoController = new CreateEnderecoController();
enderecoRouter.post('/enderecos', createEnderecoController.handle);

// Get AllEndereco
const getAllEnderecoController = new GetAllEnderecoController();
enderecoRouter.get('/enderecos', getAllEnderecoController.handle);

// Get By Id
const getByIdEnderecoController = new GetByIdEnderecoController();
enderecoRouter.get('/enderecos/:id', getByIdEnderecoController.handle);

// Update
const updateEnderecoController = new UpdateEnderecoController();
enderecoRouter.put('/enderecos', updateEnderecoController.handle);

// Delete
const deleteEnderecoController = new DeleteEnderecoController();
enderecoRouter.delete('/enderecos', deleteEnderecoController.handle);

export { enderecoRouter }