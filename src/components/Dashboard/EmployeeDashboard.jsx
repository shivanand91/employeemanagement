import React from 'react'
import Header from '../../minorcoponents/Header'
import EmpStatus from '../../minorcoponents/EmpStatus'
import TaskList from '../../minorcoponents/TaskList'

const EmployeeDashboard = () => {
  return (
      <div className='bg-[#1C1C1C]  p-4' >
          <Header />
          <EmpStatus />
          <TaskList />
      </div>
  )
}

export default EmployeeDashboard