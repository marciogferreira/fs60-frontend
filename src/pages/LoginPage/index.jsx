import { useContext } from "react"
import { useNavigate } from "react-router"
import { AuthContext } from "../../contexts/AuthContext"

export default function LoginPage() {

    const { login } = useContext(AuthContext)

    const navigation = useNavigate()
    function realizarLogin() {
        // VALIDACOES DE CAMPOS
        // AUTENTICACAO COM BANCO DE DADOS
        // VERIFICA SE RETORNA TOKEN
        // AUTORIZANDO NO FRONTEND
        navigation('/')
        login()
       
    }

    return (
        <>
            <button onClick={realizarLogin}>Acessar</button>
        </>
    )
}