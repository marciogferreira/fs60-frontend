import Menu from "../../layouts/Menu"
import { useState } from 'react'

function HomePage() {
    const[nome, setNome] = useState('Max')
   
    function mudarNome() {
        setNome('Marcio Ferreira')
    }

    function mudarNomeMax() {
        setNome('Max')
    }
    
    return (
        <div style={{ backgroundColor: 'yellow' }}>
            <Menu />
            {nome} <br />
            <button onClick={mudarNome}>Mudar Nome</button>
            <button onClick={mudarNomeMax}>Voltar Nome</button>
            HomePage
        </div>
    )
}

export default HomePage