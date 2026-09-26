import { useState } from "react"
function CrudPage() {
    const[lista, setLista] = useState([]);
    function consultarDados() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((resposta) => {
            return resposta.json()
        })
        .then((json) => {
            console.log(json)
            setLista(json)
        })
    }
    return (
        <>
            <button onClick={consultarDados}>Consultar Dados</button>
            <br />
            <ul>
                {lista.map((item) => (
                    <li>
                        {item.name} - {item.email}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default CrudPage