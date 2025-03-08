import React from 'react'

const EmpStatus = () => {
  return (
    <div className='flex flex-wrap mt-8 justify-between gap-5'>
      <div className='px-9 rounded-xl py-6 bg-red-400 w-full sm:w-[45%] md:w-[22%]'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='px-9 rounded-xl py-6 bg-amber-400 w-full sm:w-[45%] md:w-[22%]'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='px-9 rounded-xl py-6 bg-blue-400 w-full sm:w-[45%] md:w-[22%]'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='px-9 rounded-xl py-6 bg-green-400 w-full sm:w-[45%] md:w-[22%]'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
    </div>     
  )
}

export default EmpStatus