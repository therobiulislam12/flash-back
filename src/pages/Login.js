import React from 'react'
import useTitles from '../hooks/useTitles'

const Login = () => {

  // Set Page title
  useTitles("Login")

  return (
    <div>Login
      <button>Google Login</button>
    </div>
  )
}

export default Login