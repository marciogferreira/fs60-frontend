import { Link } from "react-router"
import Menu from "../../layouts/Menu"

function ServicoPage() {

    const servicos = [
        {
            "id": 1,
            "descricao": "Manutenção de computadores",
            "valor": 150.00
        },
        {
            "id": 2,
            "descricao": "Instalação e configuração de software",
            "valor": 100.00
        },
        {
            "id": 3,
            "descricao": "Configuração de rede",
            "valor": 200.00
        },
        {
            "id": 4,
            "descricao": "Backup e recuperação de dados",
            "valor": 250.00
        },
        {
            "id": 5,
            "descricao": "Instalação de sistema operacional",
            "valor": 180.00
        },
        {
            "id": 6,
            "descricao": "Suporte técnico remoto",
            "valor": 80.00
        },
        {
            "id": 7,
            "descricao": "Configuração de impressora",
            "valor": 90.00
        },
        {
            "id": 8,
            "descricao": "Consultoria em TI",
            "valor": 300.00
        }
    ]

    return (
        <>
            <Menu />
            <h1>Serviço Page</h1>
            <ul>
                {servicos.map((item, index) => (
                    <li key={index}>
                        Cod: {item.id} <br />
                        Descricao: {item.descricao} <br />
                        Valor: {item.valor} <br />
                        <Link to={`/servicos-detalhes/${item.id}`}>Ver detalhes</Link>
                        <hr />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ServicoPage