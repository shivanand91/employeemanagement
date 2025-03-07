import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'

const App = () => {
  return (
    <>
      <div className='p-6 flex justify-between'>
        <h1 className='text-2xl'>Hello, <br /> <span className='text-3xl font-semibold'>Shivanand Kumar 👋 </span></h1>
        <button className='bg-red-600 px-6 hover:bg-red-500 transition-all duration-75 text-xl font-semibold rounded-sm cursor-pointer'>Logout</button>
      </div>
      {/* <Login /> */}
      {/* <EmployeeDashboard /> */}
      <AdminDashboard />
    </>
  )
}

export default App