import { prisma } from '../../database/client.js';

export class GetByIdProdutoController {

    async handle(request, response) {

        const { id } = request.params;

        const produto = await prisma.produto.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        return response.json(produto);

    }

}