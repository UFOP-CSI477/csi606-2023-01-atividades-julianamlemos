import {prisma} from "../../database/client.js";

export class UpdateProdutoController{

    async handle(request, response){
        const {id, tipo, valor} = request.body;
        
        const produto = await prisma.produto.update({
            where:{
                id: id
            },
    
            data:{
                tipo,
                valor,
            }
        });

        response.json(produto);
    }

}