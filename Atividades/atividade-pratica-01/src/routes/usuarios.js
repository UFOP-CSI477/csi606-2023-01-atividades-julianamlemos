import { Router } from 'express';
import { CreateUsuariosController } from '../controller/usuarios/CreateUsuariosController.js';
import { DeleteUsuariosController } from '../controller/usuarios/DeleteUsuariosController.js';
import { GetAllUsuariosController } from '../controller/usuarios/GetAllUsuariosController.js';
import { GetByIdUsuariosController } from '../controller/usuarios/GetByIdUsuariosController.js';
import { UpdateUsuariosController } from '../controller/usuarios/UpdateUsuariosController.js';

const usuariosRouter = Router();

// Create
const createUsuariosController = new CreateUsuariosController();
usuariosRouter.post('/usuarios', createUsuariosController.handle);

// Get All
const getAllUsuariosController = new GetAllUsuariosController();
usuariosRouter.get('/usuarios', getAllUsuariosController.handle);

// Get By Id
const getByIdUsuariosController = new GetByIdUsuariosController();
usuariosRouter.get('/usuarios/:id', getByIdUsuariosController.handle);

// Update
const updateUsuariosController = new UpdateUsuariosController();
usuariosRouter.put('/usuarios', updateUsuariosController.handle);

// Delete
const deleteUsuariosController = new DeleteUsuariosController();
usuariosRouter.delete('/usuarios', deleteUsuariosController.handle);

export { usuariosRouter }