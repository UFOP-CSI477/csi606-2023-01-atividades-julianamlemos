import { prisma } from '../../database/client.js'

export class UpdateEnderecoController {

    async handle(request, response) {

        const { nome, cidade_id } = request.body;

        const endereco = await prisma.endereco.update({

            where: {
                id: parseInt(id)
            },
            data: {
                nome,
                updated_at: new Date(),
                cidade: {
                    connect: {
                        id: cidade_id
                    }
                }

            }

        });

        return response.json(endereco);

    }

}