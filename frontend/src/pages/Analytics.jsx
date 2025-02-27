import React from 'react'

function Analytics() {
  return (
    <div className='w-full flex pl-10 pr-20 pt-2 h-full bg-blue-100'>
      <div className='flex flex-col w-full'>
        <div className='flex justify-between'>
            <label className='font-semibold'>Overview</label>
            <div className='p-3 bg-gray-200 text-sm rounded-lg'>
              <span>Feb 9th to feb 23rd</span>
            </div>
        </div>
        <div className='flex mt-6 w-full'>
            <div className='bg-[#22D679] h-[16vh] justify-start w-full rounded-2xl p-6 flex flex-col space-y-3'>
              <span className='text-white text-lg'>Clicks on Links</span>
              <span className='text-white font-semibold text-3xl'>2,318</span>
            </div>
            <div className='bg-green-200 h-[16vh] justify-center w-full rounded-2xl p-6 flex flex-col space-y-3 ml-[8vh]'>
              <span className='text-black text-lg'>Click on Shop</span>
              <span className='text-black font-semibold text-3xl'>7,265</span>
            </div>
            <div className='bg-green-200 h-[16vh] justify-end w-full rounded-2xl p-6 flex flex-col space-y-3 ml-[8vh]'>
              <span className='text-black text-lg'>CTA</span>
              <span className='text-black font-semibold text-3xl'>156</span>
            </div>
        </div>
        <div className='bg-white rounded-2xl h-[36vh] w-full mt-6'>

        </div>
        <div className='flex h-[60vh] mt-6 justify-between bg-red-300 space-x-6 w-full mb-20'>
          <div className='bg-gray-200 rounded-2xl h-full'>

          </div>
          <div className='bg-gray-200 rounded-2xl h-full'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics