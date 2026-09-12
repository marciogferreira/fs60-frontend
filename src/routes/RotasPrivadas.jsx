import { createBrowserRouter, RouterProvider } from "react-router"

export default function RotasPrivadas() {
    const rotas = createBrowserRouter([
        { path: "/", element: <h1>Dashboard</h1> }
    ])
    return <RouterProvider router={rotas} />
}
