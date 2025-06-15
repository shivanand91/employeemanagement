import React from 'react'

const AcceptTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[350px] bg-yellow-500 rounded-xl'>
    <div className='flex justify-between p-4 text-sm'>
        <h3 className='bg-red-600 px-4 rounded-sm font-semibold'>High</h3>
        <h4 className='font-semibold text-sm'>07 March 2025</h4>
    </div>
    <div className='flex flex-col justify-items-start p-4'>
        <h2 className='text-2xl font-semibold'>This for Task Heading</h2>
        <p className='text-sm mt-2'>Yaha per aap apna task likh sakte hai. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur praesentium pariatur ex harum recusandae. Dolorem!</p>
          </div>
          <div className='flex justify-between p-2'>
              <button className='bg-red-500 text-white px-2 py-1 mt-1 rounded-md'> 
                  Mark as Failed
              </button>
              <button className='bg-green-500 text-black px-2 py-1 mt-1 rounded-md'>
                  Mark as Completed
              </button>
          </div>
</div> 
  )
}

export default AcceptTask