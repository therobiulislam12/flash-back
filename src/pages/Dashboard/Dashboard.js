import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthProvider';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState("");

  // get user role
  useEffect(() => {
    axios(`https://flashback-zeta.vercel.app/users?email=${user?.email}`).then((user) => {
      setRole(user?.data[0]?.role.toUpperCase());
    });
  }, [user?.email]);

  return (
    <div>
      <h1 className="text-5xl">Welcome to <span className='font-bold text-green-500'>{role}</span> Dashboard</h1>
    </div>
  )
}

export default Dashboard