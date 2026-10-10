import { createContext, useState } from "react";

export const AuthContext = createContext({})

export default function AuthProvider(props) {

    const[isLogged , setIsLogged] = useState(false)

    function login() {
        // Login com Backend
        setIsLogged(true)
    }

    function logout() {
        // Deleta os tokens
        setIsLogged(false)
    }

    return (
        <AuthContext.Provider value={{ isLogged, setIsLogged, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

