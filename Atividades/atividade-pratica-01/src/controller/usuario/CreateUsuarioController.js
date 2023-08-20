import { prisma } from '../../database/client.js'

export class CreateUsuarioController {

    async handle(request, response) {

        const { nome,email,senha, cidade_id } = request.body;

        const usuario = await prisma.usuario.create({

            data: {
                nome,email,senha
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
