import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Main from "../layouts/Main";
import Blogs from "../pages/Blogs";
import AllUsers from "../pages/Dashboard/AllUsers";
import Dashboard from "../pages/Dashboard/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductCategories from "../pages/ProductCategories";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/blogs',
                element: <Blogs/>
            },
            {
                path:'/category/:categoryName',
                element: <ProductCategories/>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/register',
                element: <SignUp/>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout/>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/dashboard/all-users',
                element: <AllUsers/>
            },
        ]
    }
])

export default router;