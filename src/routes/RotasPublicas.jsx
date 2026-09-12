import { createBrowserRouter, RouterProvider } from "react-router"
import HomePage from "../pages/HomePage"
import ProdutosPage from "../pages/ProdutosPage"
import ContatoPage from "../pages/ContatoPage"
import ServicoPage from "../pages/ServicoPage"
import DetalhesServicoPage from "../pages/ServicoPage/DetalhesServicoPage"

export default function RotasPublicas() {
    const rotas = createBrowserRouter([
        { path: "/", element: <HomePage /> },
        { path: "/produtos", element: <ProdutosPage /> },
        { path: "/contato", element: <ContatoPage /> },
        { path: "/servicos", element: <ServicoPage /> },
        { path: "/servicos-detalhes/:codigo", element: <DetalhesServicoPage /> },
        { path: '*', element: <h1>404 - Nao encontrada</h1> },
    ])
    return <RouterProvider router={rotas} />
}
