import { createBrowserRouter, RouterProvider } from "react-router"
import DashboardPage from "../pages/auth/DashboardPage"

export default function RotasPrivadas(props) {
    const rotas = createBrowserRouter([
        { path: "/", element: <DashboardPage /> }
    ])
    return <RouterProvider router={rotas} />
}
