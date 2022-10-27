import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About";
import Blog from "../../components/Blog";
import Category from "../../components/Category";
import CheckOut from "../../components/CheckOut";
import Course from "../../components/Course";
import CoursesPage from "../../components/CoursesPage";
import Faqs from "../../components/Faqs";
import Home from "../../components/Home";
import LoginForm from "../../components/LoginForm";
import PageNotFound from "../../components/PageNotFound";
import RegisterForm from "../../components/RegisterForm";
import Main from "../../layouts/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://itshikkha-course-server.vercel.app/courses')

            },
            {
                path: 'courses/',
                element: <CoursesPage></CoursesPage>,
                loader: () => fetch('https://itshikkha-course-server.vercel.app/courses')
            },
            {
                path: '/category/:slug',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://itshikkha-course-server.vercel.app/category/${params.slug}`)

            },
            {
                path: '/:slug',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`https://itshikkha-course-server.vercel.app/course/${params.slug}`)

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
                element: <Blog></Blog>
            },
            {
                path: 'faqs/',
                element: <Faqs></Faqs>
            },
            {
                path: 'about/',
                element: <About></About>
            },
            {
                path: 'checkout/:slug',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://itshikkha-course-server.vercel.app/course/${params.slug}`)

            },
            {
                path: '*',
                element: <PageNotFound></PageNotFound>
            }

        ]
    }
])