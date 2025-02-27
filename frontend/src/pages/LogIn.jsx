import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Frame from '../assets/Frame.svg'
import Logo from '../assets/Logo.svg'
import Icon from '../assets/PasswordHiddenIcon.svg'

function LogIn() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/user/login', formData);
      alert(response.data.message);
      navigate('/links');
    } catch (error) {
      console.log(error.response.data.message);
      alert(error.response.data.message);
    }
  }

  return (
    <div className='w-full h-screen flex'>
        <div className='w-[62%] flex flex-col'>
            <div>
                <img className='p-12' src={Logo} alt="" />
            </div>
            <form onSubmit={handleSubmit} className='px-40 flex flex-col h-full relative'>
                <h2 className='text-6xl font-extrabold tracking-[-2px]' >Sign in to your Spark</h2>
                <input name='email' value={formData.email} onChange={handleChange} className='bg-[#EFF0EC] rounded-md p-3 mt-16' type="email" placeholder='Spark/Username'/>
                <input name='password' value={formData.password} onChange={handleChange} className='bg-[#EFF0EC] rounded-md p-3 mt-6' type="password" placeholder='Password'/>
                <button type='submit' className='bg-[#E0E2D9] text-[#A8AAA2] rounded-full p-3 mt-16 font-semibold hover:bg-[#28A263] hover:font-bold hover:text-white cursor-pointer transition duration-160'>Log in</button>
                <p className='mt-6 text-center'>Don't Have an account? <span className='text-green-500 underline mt-8 cursor-pointer hover:font-semibold'>Sign up</span></p>
                <p className='text-sm text-center text-gray-500 absolute bottom-20'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service</span> apply.</p>
            </form>
        </div>
        <div className='w-[38%]'>
           <img className='h-full w-full object-cover' src={Frame} alt="" />
        </div>
    </div>
  )
}

export default LogIn