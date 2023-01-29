import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./features/Identity/components/login/login";
import Register from "./features/Identity/components/register/register";
import IdentityLayout from "./layouts/identity-layout";
import { registerAction } from "./features/Identity/components/register/register";

const router = createBrowserRouter([
    {
        element: <IdentityLayout/>,
        children: [
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>,
                action: registerAction
            },
        ]
    }
]);

export default router;