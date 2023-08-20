import { prisma } from '../../database/client.js'

export class CreateComprasController {

    async handle(request, response) {

        const {usuario_id, endereco_id } = request.body;

        const compras = await prisma.compras.create({

            data: {
                usuario: {
                    connect: {
                        id: usuario_id
                    }
                },
                endereco: {
                    connect:{
                        id: endereco_id
                    }
                }
            }

        });

        return response.json(compras);

    }

}
