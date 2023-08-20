import { prisma } from '../../database/client.js'

export class DeleteEnderecoController {

    async handle(request, response) {

        const { id } = request.body;

        try {
            const endereco = await prisma.endereco.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(endereco)

        } catch (error) {
            
            console.error(error);
            return response.status(400).json(error);

        }

    }

}