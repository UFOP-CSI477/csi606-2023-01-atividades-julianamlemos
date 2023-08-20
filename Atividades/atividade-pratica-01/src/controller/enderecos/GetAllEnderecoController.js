import { prisma } from '../../database/client.js'

export class GetAllEnderecoController {

    async handle(request, response) {

        const enderecos = await prisma.endereco.findMany({

            include: {
                cidade: true
            }

        });
        return response.json(enderecos);

    }

}