import { createBrowserRouter, RouterProvider } from "react-router"
import HomePage from "../pages/HomePage"
import ProdutosPage from "../pages/ProdutosPage"
import ContatoPage from "../pages/ContatoPage"
import ServicoPage from "../pages/ServicoPage"
import DetalhesServicoPage from "../pages/ServicoPage/DetalhesServicoPage"
import LoginPage from "../pages/LoginPage"
import CrudPage from "../pages/CrudPage"
import ProdutosPageA from "../pages/auth/ProdutosPageA"
import FormProdutos from "../pages/auth/ProdutosPageA/FormProdutos"
import FormProdutosPage from "../pages/auth/ProdutosPageA/FormProdutosPage"
export default function RotasPublicas(props) {
    const rotas = createBrowserRouter([
        { path: "/", element: <HomePage /> },
        { path: "/rest", element: <CrudPage />  },
        { path: "/login", element: <LoginPage /> },
        { path: "/produtos", element: <ProdutosPageA /> },

        { path: "/produtos/novo", element: <FormProdutosPage /> },
        { path: "/produtos/editar/:id", element: <FormProdutosPage /> },
        

        { path: "/contato", element: <ContatoPage /> },
        { path: "/servicos", element: <ServicoPage /> },
        { path: "/servicos-detalhes/:codigo", element: <DetalhesServicoPage /> },
        { path: '*', element: <h1>404 - Nao encontrada</h1> },
    ])
    return <RouterProvider router={rotas} />
}
