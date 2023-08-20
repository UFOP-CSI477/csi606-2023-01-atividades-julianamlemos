import { prisma } from '../../database/client.js'

export class GetAllcomprasController {

    async handle(request, response) {

        const compras = await prisma.compras.findMany({

            include: {
                usuarios: true,
                endereco: true
            }

        });
        return response.json(compras);

    }

}