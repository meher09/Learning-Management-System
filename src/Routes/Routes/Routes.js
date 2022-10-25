import { createBrowserRouter } from "react-router-dom";
import Category from "../../components/Category";
import CoursesPage from "../../components/CoursesPage";
import Home from "../../components/Home";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import Main from "../../layouts/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('Data/course-intro.json')

            },
            {
                path: 'courses/',
                element: <CoursesPage></CoursesPage>,
                loader: () => fetch('Data/course-intro.json')
            },
            {
                path: '/category/:slug',
                element: <Category></Category>,
            },
            {
                path: 'login/',
                element: <LoginForm></LoginForm>
            },
            {
                path: 'register/',
                element: <RegisterForm></RegisterForm>
            },
            {
                path: 'blog/',
                element: <LoginForm></LoginForm>
            },
            {
                path: 'faqs/',
                element: <LoginForm></LoginForm>
            },

        ]
    }
])