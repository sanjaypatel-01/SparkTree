import React from 'react'
import Frame from '../assets/Frame.svg'
import Logo from '../assets/Logo.svg'
import Icon from '../assets/PasswordHiddenIcon.svg'

function LogIn() {
  return (
    <div className='w-full h-screen flex'>
        <div className='w-[62%] flex flex-col'>
            <div>
                <img className='p-12' src={Logo} alt="" />
            </div>
            <div className='px-40 flex flex-col h-full relative'>
                <h2 className='text-6xl font-extrabold tracking-[-2px]' >Sign in to your Spark</h2>
                <input className='bg-[#EFF0EC] rounded-md p-3 mt-16' type="text" placeholder='Spark/Username'/>
                <input className='bg-[#EFF0EC] rounded-md p-3 mt-6' type="text" placeholder='Password'/>
                <button className='bg-[#E0E2D9] text-[#A8AAA2] rounded-full p-3 mt-16 font-semibold hover:bg-[#28A263] hover:font-bold hover:text-white cursor-pointer transition duration-160'>Log in</button>
                <p className='mt-6 text-center'>Don't Have an account? <span className='text-green-500 underline mt-8 cursor-pointer hover:font-semibold'>Sign up</span></p>
                <p className='text-sm text-center text-gray-500 absolute bottom-20'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service</span> apply.</p>
            </div>
        </div>
        <div className='w-[38%]'>
           <img className='h-full w-full object-cover' src={Frame} alt="" />
        </div>
    </div>
  )
}

export default LogIn