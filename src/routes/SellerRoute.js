import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const SellerRoute = ({ children }) => {
  const { exitsUser, user, loading } = useContext(AuthContext);


  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl">Loading....</h1>
      </div>
    );
  }

  if (user && exitsUser[0].role === 'seller') {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
