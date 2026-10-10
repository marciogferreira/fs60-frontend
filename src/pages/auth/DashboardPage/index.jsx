import { useContext } from "react"
import { AuthContext } from "../../../contexts/AuthContext"

export default function DashboardPage() {

    const { logout } = useContext(AuthContext)

    return (
        <>
            Dashboard
            <button onClick={logout}>Sair</button>
        </>
    )
}