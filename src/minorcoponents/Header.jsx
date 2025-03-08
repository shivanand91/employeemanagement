import React from 'react'

const Header = () => {
  return (
    <div className='p-6 flex flex-col md:flex-row justify-between items-center'>
      <h1 className='text-2xl text-center md:text-left'>
        Hello, <br /> 
        <span className='text-3xl font-semibold'>Shivanand Kumar 👋 </span>
      </h1>
      <button className='bg-red-600 px-6 mt-4 md:mt-0 hover:bg-red-500 transition-all duration-75 text-xl font-semibold rounded-sm cursor-pointer py-2'>
        Logout
      </button>
    </div>
  )
}

export default Header