import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Sidebar = () => {
  const { user, verifyAccount } = useContext(AuthContext);

  const handleVerify = () =>{
    verifyAccount()
    .then(() => {
      toast.success('Please check your mail');
    }).catch(err => toast.error(err.message))
  }

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
        <p className="text-lg text-gray-400">Role : Seller</p>
        {user?.emailVerified ? (
          <div className={`badge badge-accent`}>Verified</div>
        ) : (
          <button className="badge badge-primary" onClick={handleVerify}>Verify please</button>
        )}
      </div>
      <ul className="menu bg-base-100">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard/all-users">ALl Users</Link>
        </li>
        <li>
          <Link to="/dashboard/add-product">Add a Product</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
