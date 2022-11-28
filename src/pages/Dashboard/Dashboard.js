import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthProvider';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState("");

  // get user role
  useEffect(() => {
    axios(`http://localhost:5000/users?email=${user?.email}`).then((user) => {
      console.log(user.data);
      setRole(user.data[0]?.role);
    });
  }, [user?.email]);

  return (
    <div>
      <h1 className="text-5xl">Welcome to <span className='font-bold text-green-500'>{role.toUpperCase()}</span> Dashboard</h1>
    </div>
  )
}

export default Dashboard