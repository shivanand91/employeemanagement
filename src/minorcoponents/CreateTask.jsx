import React from 'react'

const CreateTask = () => {
  return (
    <div className='bg-[#100b0baf] p-4 md:p-6 rounded-lg'>
    <form className='flex flex-wrap gap-5 justify-center items-start'>
      <div className='w-full md:w-1/2'>
        <div>
          <h3 className='text-lg'>Task Title</h3>
          <input className='border w-full px-4 py-2 mt-2 rounded-xl mb-4' type="text" placeholder='Make a ui design' />
        </div>
        <div>
          <h3 className='text-lg'>Date</h3>
          <input className='border w-full px-4 py-2 mt-2 rounded-xl mb-4' type="date" />
        </div>
        <div>
          <h3 className='text-lg'>Assign to</h3>
          <input className='border w-full px-4 py-2 mt-2 rounded-xl mb-4' type="text" placeholder='Employee name' />
        </div>
        <div>
          <h3 className='text-lg'>Category</h3>
          <input className='border w-full px-4 py-2 mt-2 rounded-xl mb-2' type="text" placeholder='design, dev, etc.' />
        </div>
      </div>
      <div className='w-full md:w-1/3 flex flex-col'>
        <h3 className='text-lg'>Description</h3>
        <textarea name="" id="" cols="30" rows="10" className='mt-4 border p-2 rounded-lg w-full'></textarea>
        <button className='mt-6 border py-2 bg-green-600 rounded'>Create Task</button>
      </div>
    </form>
  </div>
  )
}

export default CreateTask