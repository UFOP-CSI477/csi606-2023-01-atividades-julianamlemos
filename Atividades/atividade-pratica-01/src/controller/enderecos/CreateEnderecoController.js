import { prisma } from '../../database/client.js'

export class CreateEnderecoController {

    async handle(request, response) {

        const { nome, cidade_id } = request.body;

        const endereco = await prisma.endereco.create({

            data: {
                nome,
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
