import { prisma } from '../../database/client.js'

export class UpdateUsuarioController {

    async handle(request, response) {

        const { nome,email,senha cidade_id, } = request.body;

        const usuario = await prisma.usuario.update({

            where: {
                id: parseInt(id)
            },
            data: {
                nome,email,senha
                updated_at: new Date(),
                cidade: {
                    connect: {
                        id: cidade_id
                    }
                },
            }

        });

        return response.json(usuario);

    }

}