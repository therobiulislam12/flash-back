import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Main from "../layouts/Main";
import Blogs from "../pages/Blogs";
import AddAProduct from "../pages/Dashboard/AddAProduct";
import AllProducts from "../pages/Dashboard/AllProducts";
import AllSeller from "../pages/Dashboard/AllSeller";
import AllUsers from "../pages/Dashboard/AllUsers";
import Dashboard from "../pages/Dashboard/Dashboard";
import ReportedItems from "../pages/Dashboard/ReportedItems";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductCategories from "../pages/ProductCategories";
import SignUp from "../pages/SignUp";
import PrivateRoutes from "./PrivateRoute";

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
                element: <PrivateRoutes><ProductCategories/></PrivateRoutes>
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
                element: <AllUsers/>,
            },
            {
                path: '/dashboard/add-product',
                element: <AddAProduct/>,
            },
            {
                path: '/dashboard/all-products',
                element: <AllProducts/>,
            },
            {
                path: '/dashboard/reported',
                element: <ReportedItems/>,
            },
            {
                path: '/dashboard/all-seller',
                element: <AllSeller/>,
            },
        ]
    }
])

export default router;