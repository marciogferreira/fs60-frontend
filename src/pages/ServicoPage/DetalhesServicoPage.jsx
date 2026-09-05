import { useParams } from "react-router"
import Menu from "../../layouts/Menu"

function DetalhesServicoPage() {
    const params = useParams()
    console.log(params.codigo)
    // https://dontpad.com/fs60/aula26
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

    const posicaoServico = servicos.findIndex(item => item.id == params.codigo)
    const servico = servicos[posicaoServico]
    return (
        <>
            <Menu />
            <h1>DetalhesServicoPage - {params.codigo}</h1>
            Codigo do Servico: {servico.id}
            <br />
            <strong>Descricao</strong>: <br />
            {servico.descricao}
            <br />
            Valor: {servico.valor}
        </>
    )
}

export default DetalhesServicoPage