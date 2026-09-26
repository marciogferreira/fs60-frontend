import { useEffect, useState } from "react"
import axios from 'axios'
import api from "../../../core/Api"
function ProdutosPageA() {

    const[produtos, setProdutos] = useState([])
    const[pesquisa, setPesquisa] = useState(null)

    async function listarDados() {
        const response = await api.get('products')
        setProdutos(response.data)
    }
    
    async function deletarDados(id) {
        const check = confirm("Deseja deletar este produto?")
        if(check) {
            await api.delete('products/'+id)
            listarDados()
        }
    }

    useEffect(() => {
        listarDados()
    }, [])    
    // https://dontpad.com/fs60/aula29
    return (
        <>
            <div className="container">
                <h3>Produtos</h3>
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <input type="text" value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} placeholder="Pesquisar" className="form-control" />
                        </form>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <button className="btn btn-success btn-sm">
                            Novo
                        </button>
                    </div>
                </div>
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Preço</th>
                            <th>Imagem</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos
                        .filter((item) => {
                            if(pesquisa == "" || pesquisa == null) {
                                return item
                            } else {
                                const pesquisaUpp = pesquisa.toUpperCase()
                                const titleUpp = item.title.toUpperCase()
                                if(titleUpp.indexOf(pesquisaUpp) >= 0) {
                                    return item
                                }
                            }
                        }).map((produto, index) => (
                            <tr key={index}>
                                <td>{produto.id}</td>
                                <td>{produto.title}</td>
                                <td>{produto.price}</td>
                                <td>
                                    <img height={50} src={produto.image} alt="" />
                                </td>
                                <td style={{ width: '150px' }}>
                                    <button className="btn btn-primary btn-sm">
                                        Editar
                                    </button>&nbsp;
                                    <button onClick={() => deletarDados(produto.id)} className="btn btn-danger btn-sm">
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ProdutosPageA