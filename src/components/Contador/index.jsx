import { useState, useEffect } from "react"

export default function Contador() {

    const[contador, setContador] = useState(0)

    function aumentar() {
        setContador(contador + 1)
    }

    function diminuir() {
        if(contador > 1) {
            setContador(contador - 1)   
        }
    }
    // https://dontpad.com/fs60/aula27
    // Executa quando o componente monta na tela
    useEffect(() => {
        console.log("Executando o useEffect")
    }, [])

    // Executa quando o contador sempre muda de valor
    useEffect(() => {
        console.log("Alterando o contador: ", contador)
    }, [contador])

    useEffect(() => {
       return () => {
        console.log("Desmontando o componente. Tchau!")
       }
    }, [])

    


    return (
        <div style={{ height: '100px', background: '#F3f3f3' }}>
            <h3>Contador</h3>
            Quantidade: {contador}
            <button onClick={diminuir}>Diminuir</button>
            <button onClick={aumentar}>Aumentar</button>
        </div>
    )
}