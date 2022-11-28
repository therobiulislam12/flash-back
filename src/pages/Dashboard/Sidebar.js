import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Sidebar = () => {
  const { user, exitsUser, loading } = useContext(AuthContext);
  
  if (loading) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl">Loading....</h1>
      </div>
    );
  }
  const { role, verified: isVerified } = exitsUser[0];

  return (
    <div className="bg-white border-r w-full lg:w-72 h-screen p-6 hidden lg:block ">
      <div className="author mb-4 rounded border p-4 text-center space-y-2">
        <div className="avatar online placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
            <span className="text-2xl">
              {user?.displayName.split(" ")[0].charAt(0)}
            </span>
          </div>
        </div>
        <h2 className="text-2xl font-bold">{user?.displayName}</h2>
        <p className="text-lg text-gray-400">Role : {role}</p>
        {isVerified ? (
          <div className={`badge badge-accent`}>Verified</div>
        ) : (
          role !== "user" && (
            <button className="badge badge-primary">Verify please</button>
          )
        )}
      </div>
      <ul className="menu bg-base-100">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        {role === "admin" && (
          <>
            <li>
              <Link to="/dashboard/all-users">All Buyers</Link>
            </li>
            <li>
              <Link to="/dashboard/all-seller">All Sellers</Link>
            </li>
            <li>
              <Link to="/dashboard/reported">Reported Items</Link>
            </li>
          </>
        )}
        {role === "user" && (
          <>
            <li>
              <Link to="/dashboard/my-orders">My Orders</Link>
            </li>
          </>
        )}

        {role === "seller" && (
          <>
            <li>
              <Link to="/dashboard/add-product">Add a Product</Link>
            </li>
            <li>
              <Link to="/dashboard/all-products">All Products</Link>
            </li>
          </>
        )}

        <button className="btn mt-6">
          <Link to="/">Go to Home</Link>
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
