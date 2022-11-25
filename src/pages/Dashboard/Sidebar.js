import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white border-r w-full lg:w-72 h-screen p-6 hidden lg:block ">
      <div></div>
      <ul className="menu bg-base-100">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard/all-users">ALl Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
