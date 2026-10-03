import { useState } from "react"
import api from '../../../core/Api'
function FormProdutos() {

    const[titulo, setTitulo] = useState('')
    
    async function salvarProduto(evento) {
        evento.preventDefault() // Funcao para nao recarregar a tela
        if(titulo == '') {
            alert("O Campo Titulo é obrigatorio.")
            return false
        }
        const data = { // montando o objeto com os dados do form
            titulo  
        }
        await api.post('products', data)
        alert("Produto Cadastrado com Sucesso.")
        setTitulo('')
    }

    return (
        <>
            <h2>Novo Produto</h2>
            <form onSubmit={salvarProduto}>
                <label htmlFor="">Titulo - {titulo}</label>
                <input 
                    value={titulo}
                    onChange={(evento) => setTitulo(evento.target.value)} 
                    type="text" 
                    className="form-control" 
                    name="titulo" 
                />
                <button className="btn btn-success">Salvar</button>
            </form>
        </>
    )
}

export default FormProdutos