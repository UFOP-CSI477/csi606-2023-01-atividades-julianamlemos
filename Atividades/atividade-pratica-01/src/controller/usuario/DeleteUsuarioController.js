import { prisma } from '../../database/client.js'

export class DeleteUsuarioController {

    async handle(request, response) {

        const { id } = request.body;

        try {
            const usuario = await prisma.usuario.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(usuario)

        } catch (error) {
            
            console.error(error);
            return response.status(400).json(error);

        }

    }

}