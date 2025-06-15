import React from 'react'

const CompleteTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[350px] bg-green-500 rounded-xl'>
        <div className='flex justify-between p-4 text-sm'>
            <h3 className='bg-red-600 px-4 rounded-sm font-semibold'>High</h3>
            <h4 className='font-semibold text-sm'>07 March 2025</h4>
        </div>
        <div className='flex flex-col justify-items-start p-4'>
            <h2 className='text-2xl font-semibold'>This for Task Heading</h2>
            <p className='text-sm mt-2'>Yaha per aap apna task likh sakte hai. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur praesentium pariatur ex harum recusandae. Dolorem!</p>
          </div>
          <h3 className='text-center py-1 m-2 rounded-md bg-amber-800'>Completed</h3>
    </div>   
  )
}

export default CompleteTask