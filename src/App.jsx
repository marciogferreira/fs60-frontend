
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'

import HomePage from './pages/HomePage'
import ProdutosPage from './pages/ProdutosPage'
import ContatoPage from './pages/ContatoPage'
import ServicoPage from './pages/ServicoPage'
import DetalhesServicoPage from './pages/ServicoPage/DetalhesServicoPage'

function App() {

  const rotas = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/produtos", element: <ProdutosPage /> },
    { path: "/contato", element: <ContatoPage /> },
    { path: "/servicos", element: <ServicoPage /> },
    { path: "/servicos-detalhes/:codigo", element: <DetalhesServicoPage /> },
    { path: '*', element: <h1>404 - Nao encontrada</h1> },
  ])

  return (
    <>
      <RouterProvider router={rotas} />
    </>
  )

}

export default App
