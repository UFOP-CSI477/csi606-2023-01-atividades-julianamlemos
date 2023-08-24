import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api";
import { LocalInterface } from "../locais/ListLocais";
import { PessoaInterface } from "../pessoas/ListPessoas";

export interface CompraInterface {
    id: number;
    pessoa_id: number;
    local_id: number;
    created_at: string;
    updated_at: string;
    pessoa: PessoaInterface;
    local: LocalInterface;
}

const ListCompra = () => {

    const [ compras, setCompras ] = useState<CompraInterface[]>([]);  
    
    useEffect(() =>{

        api.get('/compras')
            .then(response => {
                console.log(response.data);
                setDoacoes(response.data);
            })

    }, [])

    const handleDeleteCompra = async (id: number) => {

        // Validações
        if ( !window.confirm( "Confirma exclusão da Compra?" ) ) {
            return
        }

        try {
            await api.delete('/compras', 
            {
                data: {
                    id
                }
            });

            alert("Compra excluída com sucesso!");

            // Atualizar?
            setCompra( compras.filter(pessoa => pessoa.id != id) );

        } catch(error) {
            alert("Erro na exclusão da Compra!");
            console.error(error);
        }

    }


    return(

        <div>

            <h2>Lista de compras</h2>

            <div>
                <Link to="/">Voltar</Link>
            </div>
            <div>
                <Link to="/compras/create">Cadastrar Compra</Link>
            </div>

            <table>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Pessoa</th>
                        <th>Local</th>
                        <th>Criado</th>
                        <th>Alterado</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                
                <tbody>
                    {compras.map(compra => (
                        <tr key={compra.id}>
                            <td>{compra.id}</td>
                            <td>{compra.pessoa.nome}</td>
                            <td>{compra.local.nome}</td>
                            <td>{compra.created_at}</td>
                            <td>{compra.updated_at}</td>
                            <td><Link 
                                to={`/compras/update/${compra.id}`}>Atualizar</Link></td>
                            <td><button onClick={()=>{ 
                                handleDeleteCompra(compra.id)
                             }}>Excluir</button> </td>
                        </tr>
                    ))
                    }
                </tbody>

            </table>

        </div>

    )

}

export default ListDoacoes;