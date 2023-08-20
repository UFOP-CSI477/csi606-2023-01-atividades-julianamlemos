import { prisma } from '../../database/client.js'

export class UpdateComprasController {

    async handle(request, response) {

        const { usuarios_id, endereco_id } = request.body;

        const compras = await prisma.compras.update({

            where: {
                id: parseInt(id)
            },
            data: {
                updated_at: new Date(),
                usuarios: {
                    connect: {
                        id: usuarios_id
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