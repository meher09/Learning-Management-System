import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import Main from "../../layouts/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Main></Main>,
            },
            {
                path: 'login',
                element: <LoginForm></LoginForm>
            },
            {
                path: 'register',
                element: <LoginForm></LoginForm>
            },
            {
                path: 'blog',
                element: <LoginForm></LoginForm>
            },
            {
                path: 'faqs',
                element: <LoginForm></LoginForm>
            },
            {
                path: 'courses',
                element: <LoginForm></LoginForm>
            },
        ]
    }
])