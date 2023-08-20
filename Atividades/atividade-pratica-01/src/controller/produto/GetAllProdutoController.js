import { prisma } from "../../database/client.js";

export class GetAllProdutoController {

    async handle(request, response) {

        const produtos = await prisma.produtos.findMany();
        return response.json(produtos);
    
    }

}