import React from 'react'

const EmployeeDashboard = () => {
  return (
      <div className='bg-[#1C1C1C] h-screen p-4' >
          <div className='p-6 flex justify-between'>
              <h1 className='text-2xl'>Hello, <br /> <span className='text-3xl font-semibold'>Shivanand Kumar 👋 </span></h1>
              <button className='bg-red-600 px-6 hover:bg-red-500 transition-all duration-75 text-xl font-semibold rounded-sm cursor-pointer'>Logout</button>
          </div>
          <div className='flex mt-8 justify-between gap-5'>
              <div className='px-9 rounded-xl py-6 bg-red-400 w-[45%]'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
              </div>
              <div className='px-9 rounded-xl py-6 bg-amber-400 w-[45%]'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
              </div>
              <div className='px-9 rounded-xl py-6 bg-blue-400 w-[45%]'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
              </div>
              <div className='px-9 rounded-xl py-6 bg-green-400 w-[45%]'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
              </div>
          </div>

          <div id='tasklist' className='flex overflow-x-auto justify-items-start mt-10 h-[45%] gap-5 flex-nowrap w-full p-2'>
              <div className='flex-shrink-0 h-full w-[350px] bg-yellow-500 rounded-xl'>
                  <div className='flex justify-between p-4 text-sm'>
                      <h3 className='bg-red-600 px-4 rounded-sm font-semibold'>High</h3>
                      <h4 className='font-semibold text-sm'>07 March 2025</h4>
                  </div>
                  <div className='flex flex-col justify-items-start p-4'>
                      <h2 className='text-2xl font-semibold'>This for Task Heading</h2>
                      <p className='text-sm mt-2'>Yaha per aap apna task likh sakte hai. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur praesentium pariatur ex harum recusandae. Dolorem!</p>
                  </div>
              </div>         
              <div className='flex-shrink-0 h-full w-[350px] bg-green-500 rounded-xl'>
                  <div className='flex justify-between p-4 text-sm'>
                      <h3 className='bg-red-600 px-4 rounded-sm font-semibold'>High</h3>
                      <h4 className='font-semibold text-sm'>07 March 2025</h4>
                  </div>
                  <div className='flex flex-col justify-items-start p-4'>
                      <h2 className='text-2xl font-semibold'>This for Task Heading</h2>
                      <p className='text-sm mt-2'>Yaha per aap apna task likh sakte hai. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur praesentium pariatur ex harum recusandae. Dolorem!</p>
                  </div>
              </div>         
              <div className='flex-shrink-0 h-full w-[350px] bg-blue-500 rounded-xl'>
                  <div className='flex justify-between p-4 text-sm'>
                      <h3 className='bg-red-600 px-4 rounded-sm font-semibold'>High</h3>
                      <h4 className='font-semibold text-sm'>07 March 2025</h4>
                  </div>
                  <div className='flex flex-col justify-items-start p-4'>
                      <h2 className='text-2xl font-semibold'>This for Task Heading</h2>
                      <p className='text-sm mt-2'>Yaha per aap apna task likh sakte hai. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur praesentium pariatur ex harum recusandae. Dolorem!</p>
                  </div>
              </div>         
              <div className='flex-shrink-0 h-full w-[350px] bg-orange-500 rounded-xl'>
                  <div className='flex justify-between p-4 text-sm'>
                      <h3 className='bg-red-600 px-4 rounded-sm font-semibold'>High</h3>
                      <h4 className='font-semibold text-sm'>07 March 2025</h4>
                  </div>
                  <div className='flex flex-col justify-items-start p-4'>
                      <h2 className='text-2xl font-semibold'>This for Task Heading</h2>
                      <p className='text-sm mt-2'>Yaha per aap apna task likh sakte hai. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur praesentium pariatur ex harum recusandae. Dolorem!</p>
                  </div>
              </div>         
              <div className='flex-shrink-0 h-full w-[350px] bg-amber-500 rounded-xl'>
                  <div className='flex justify-between p-4 text-sm'>
                      <h3 className='bg-red-600 px-4 rounded-sm font-semibold'>High</h3>
                      <h4 className='font-semibold text-sm'>07 March 2025</h4>
                  </div>
                  <div className='flex flex-col justify-items-start p-4'>
                      <h2 className='text-2xl font-semibold'>This for Task Heading</h2>
                      <p className='text-sm mt-2'>Yaha per aap apna task likh sakte hai. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur praesentium pariatur ex harum recusandae. Dolorem!</p>
                  </div>
              </div>         
          </div>

      </div>
  )
}

export default EmployeeDashboard