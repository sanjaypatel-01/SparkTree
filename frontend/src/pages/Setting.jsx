import React from 'react'

function Setting() {
  return (
    <div className='w-full flex flex-col bg-white p-8 rounded-lg mx-12 mr-20 my-4 h-[70vh]'>
        <label className='text-[#29A263] font-semibold'>Edit Profile</label>
        <div className='w-full flex mt-1'>
            <span className='w-[8%] h-[4px] bg-[#29A263]'></span>
            <span className='w-[92%] h-[4px]  bg-gray-300'></span>
        </div>
        <div className='mt-4 flex flex-col mt-10'>
          <label className='text-md text-gray-600'>First Name</label>
          <input className='w-[50%] border-1 border-gray-300 p-2 mt-1 rounded-lg focus:outline-none focus:border-green-800' type="text" />
        </div>  
        <div className='mt-3 flex flex-col'>
          <label className='text-md text-gray-600'>Last Name</label>
          <input className='w-[50%] border-1 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-green-800' type="text" />
        </div>  
        <div className='mt-3 flex flex-col'>
          <label className='text-md text-gray-600'>Email</label>
          <input className='w-[50%] border-1 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-green-800' type="email" />
        </div>  
        <div className='mt-3 flex flex-col'>
          <label className='text-md text-gray-600'>Password</label>
          <input className='w-[50%] border-1 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-green-800' type="number" />
        </div>  
        <div className='mt-3 flex flex-col'>
          <label className='text-md text-gray-600'>Confirm Password</label>
          <input className='w-[50%] border-1 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-green-800' type="number" />
        </div>  
        <div className="w-full flex justify-end pr-4 pb-20 ">
        <button className="bg-[#29A263] w-30 text-white text-md py-2 px-6 mt-8 rounded-lg">
          Save
        </button>
        </div>
    </div>
  )
}

export default Setting