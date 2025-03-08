import React from 'react'
import Header from '../../minorcoponents/Header'
import CreateTask from '../../minorcoponents/CreateTask'
import AllTask from '../../minorcoponents/AllTask'

const AdminDashboard = () => {
  return (
    <div className='bg-[#1C1C1C] w-full p-4 md:p-10'>
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard