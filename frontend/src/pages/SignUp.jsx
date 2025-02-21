import React from 'react'
import Frame from '../assets/Frame.svg'
import Logo from '../assets/Logo.svg'
import Icon from '../assets/PasswordHiddenIcon.svg'

function SignUp() {
  return (
    <div className='w-full h-screen flex'>
        <div className='w-[62%] flex flex-col'>
            <div>
                <img className='p-12 pb-1' src={Logo} alt="" />
            </div>
            <div className='px-40 flex flex-col items-center h-full relative'>
                <h2 className='text-5xl font-extrabold tracking-[-2px]' >Sign up to your Spark</h2>
                <div className='w-[65%] mt-10'>
                  <div className='flex justify-between'>
                    <h2 className='text-3xl font-semibold'>Create an account</h2>
                    <button className='text-green-600 underline text-sm cursor-pointer'>Sign in instead</button>
                  </div>
                  <div className='mt-4'>
                    <label className='text-md text-gray-600'>First Name</label>
                    <input className='w-full border-1 border-gray-300 p-2 mt-1 rounded-lg focus:outline-none focus:border-green-800' type="text" />
                  </div>  
                  <div className='mt-3'>
                    <label className='text-md text-gray-600'>Last Name</label>
                    <input className='w-full border-1 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-green-800' type="text" />
                  </div>  
                  <div className='mt-3'>
                    <label className='text-md text-gray-600'>Email</label>
                    <input className='w-full border-1 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-green-800' type="email" />
                  </div>  
                  <div className='mt-3'>
                    <label className='text-md text-gray-600'>Password</label>
                    <input className='w-full border-1 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-green-800' type="number" />
                  </div>  
                  <div className='mt-3'>
                    <label className='text-md text-gray-600'>Confirm Password</label>
                    <input className='w-full border-1 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-green-800' type="number" />
                  </div>  
                  <div className='mt-3 flex space-x-2'>
                    <input className='cursor-pointer' type="checkbox" />
                    <p className='text-xs text-gray-600'>By creating an account, I agree to our <span className='underline'>Terms of use</span> and <span className='underline'>Privacy Policy</span> </p>
                  </div>
                  <div className='mt-4'>
                    <button className='w-full bg-[#E0E2D9] text-[#A8AAA2] p-2 rounded-full font-semibold hover:bg-[#28A263] hover:text-white cursor-pointer transition duration-160'>Create an account</button>
                  </div>
                </div>
              <p className='text-sm text-gray-600 bottom-12 absolute'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service</span> apply.</p>
            </div>
        </div>
        <div className='w-[38%]'>
           <img className='h-full w-full object-cover' src={Frame} alt="" />
        </div>
    </div>
  )
}

export default SignUp