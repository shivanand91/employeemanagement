import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'

const App = () => {
  return (
    <>
      <Login />
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}

      <p className='text-center p-4'>Designed By ❤️ - <span className='text-gray-400'>Shivanand Kumar</span></p>
    </>
  )
}

export default App