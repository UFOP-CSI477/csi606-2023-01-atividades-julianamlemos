import { prisma } from "../../database/client.js"; 

export class CreateProdutoController {

    async handle(request, response) {

        const { tipo, valor } = request.body;


        if ( nome === "" ) {
            return response.status(400).json({
                message: "Dados incompletos. Informe o tipo e o fator"
            });
        }

        const tipoProduto = await prisma.tipoProduto.create({

            data: {
                tipo,
                valor
            }

        });

        console.log(tipoProduto);
        return response.json(tipoProduto);

    }

}
