import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({})

export default function AuthProvider(props) {

    const[isLogged , setIsLogged] = useState(false)
    const[user, setUser] = useState(null)

    function login(userData) {
        setUser(userData)
        localStorage.setItem('token-fs60', userData.accessToken)
        setIsLogged(true)
    }

    function logout() {
        // Deleta os tokens
        localStorage.removeItem('token-fs60')
        setIsLogged(false)
    }

    useEffect(() => {
        if(localStorage.getItem('token-fs60')) {
            setIsLogged(true)
        }
    }, [])

    return (
        <AuthContext.Provider value={{ isLogged, setIsLogged, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

