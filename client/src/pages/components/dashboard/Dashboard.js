import React, { useContext } from 'react'
import { AuthContext } from '@/pages/context/AuthContext'

const Dashboard = () => {
    const { user } = useContext(AuthContext);
//   const { name, email, role } = user;
  console.log(user)

  return (
    <main>
      <h1>Hello, name</h1>
    </main>
  )
}

export default Dashboard
