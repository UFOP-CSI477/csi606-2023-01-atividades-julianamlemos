import { prisma } from '../../database/client.js'

export class DeleteComprasController {

    async handle(request, response) {

        const { id } = request.body;

        try {
            const compras = await prisma.compras.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(compras)

        } catch (error) {
            
            console.error(error);
            return response.status(400).json(error);

        }

    }

}