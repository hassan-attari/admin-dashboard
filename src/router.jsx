import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login, { loginAction } from "./features/Identity/components/login/login";
import Register from "./features/Identity/components/register/register";
import IdentityLayout from "./layouts/identity-layout";
import { registerAction } from "./features/Identity/components/register/register";
import MainLayout from "./layouts/mainLayout/main-layout";
import Courses from "./pages/courses";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Courses/>
            }
        ]
    },
    {
        element: <IdentityLayout/>,
        children: [
            {
                path: 'login',
                element: <Login/>,
                action: loginAction,
                errorElement: <Login/>
            },
            {
                path: 'register',
                element: <Register/>,
                action: registerAction,
                errorElement: <Register/>
            },
        ]
    }
]);

export default router;