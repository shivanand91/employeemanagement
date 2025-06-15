import React from 'react'

const EmpStatus = ({data}) => {
  return (
    <div className='flex flex-wrap mt-8 justify-between gap-5'>
      <div className='px-9 rounded-xl py-6 bg-red-400 w-full sm:w-[45%] md:w-[22%]'>
        <h2 className='text-3xl font-semibold'>{data.failedTaskCount}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
      <div className='px-9 rounded-xl py-6 bg-amber-400 w-full sm:w-[45%] md:w-[22%]'>
        <h2 className='text-3xl font-semibold'>{ data.newTaskCount }</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='px-9 rounded-xl py-6 bg-blue-400 w-full sm:w-[45%] md:w-[22%]'>
        <h2 className='text-3xl font-semibold'>{ data.activeTaskCount }</h2>
        <h3 className='text-xl font-medium'>Accept Task</h3>
      </div>
      <div className='px-9 rounded-xl py-6 bg-green-400 w-full sm:w-[45%] md:w-[22%]'>
        <h2 className='text-3xl font-semibold'>{data.completedTaskCount}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
    </div>     
  )
}

export default EmpStatus