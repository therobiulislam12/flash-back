import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Main from "../layouts/Main";
import Blogs from "../pages/Blogs";
import AddAProduct from "../pages/Dashboard/AddAProduct";
import AllProducts from "../pages/Dashboard/AllProducts";
import AllSeller from "../pages/Dashboard/AllSeller";
import AllUsers from "../pages/Dashboard/AllUsers";
import Dashboard from "../pages/Dashboard/Dashboard";
import MyOrders from "../pages/Dashboard/MyOrders";
import ReportedItems from "../pages/Dashboard/ReportedItems";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductCategories from "../pages/ProductCategories";
import SignUp from "../pages/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoutes from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/category/:categoryName",
        element: (
          <PrivateRoutes>
            <ProductCategories />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        {" "}
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-product",
        element: (
          <SellerRoute>
            <AddAProduct />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/all-products",
        element: (
          <SellerRoute>
            <AllProducts />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/reported",
        element: (
          <AdminRoute>
            <ReportedItems />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-seller",
        element: (
          <AdminRoute>
            <AllSeller />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/my-orders",
        element: <MyOrders />,
      },
    ],
  },
]);

export default router;
