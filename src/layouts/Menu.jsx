import {  Link } from 'react-router'
function Menu() {
    return (
        <>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/produtos'}>Produtos</Link>
                </li>
                <li>
                    <Link to={'/servicos'}>Servicos</Link>
                </li>
                <li>
                    <Link to={'/contato'}>Contato</Link>
                </li>
            </ul>
        </>
    )
}

export default Menu