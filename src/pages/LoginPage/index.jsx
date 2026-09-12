import { useNavigate } from "react-router"

export default function LoginPage(props) {

    const navigation = useNavigate()
    function realizarLogin() {
        // VALIDACOES DE CAMPOS
        // AUTENTICACAO COM BANCO DE DADOS
        // VERIFICA SE RETORNA TOKEN
        // AUTORIZANDO NO FRONTEND
        navigation('/')
        props.autorizarLogin()
    }

    return (
        <>
            <button onClick={realizarLogin}>Acessar</button>
        </>
    )
}