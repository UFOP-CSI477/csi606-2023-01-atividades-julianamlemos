import { prisma } from "../../database/client.js";

export class GetByIdEnderecoController {

    async handle(request, response) {

        const { id } = request.params;

        const endereco = await prisma.endereco.findUnique({

            where: {
                id : parseInt(id)
            },

            include: {
                cidade: true
            }
        });

        return response.json(endereco);

    }

}