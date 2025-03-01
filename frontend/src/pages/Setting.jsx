import React, { useEffect, useState } from 'react'
import axios from "axios";

function Setting() {

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    if (authToken) {
      // Assuming user data is fetched from an endpoint
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}user/profile`, {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((response) => {
          console.log("User Data:", response.data); 
          setFormData({
            firstname: response.data.firstname,
            lastname: response.data.lastname,
            email: response.data.email,
            password: response.data.password,
            confirmPassword: response.data.password,
          });
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  // Handle save changes
  const saveChanges = async () => {
    const authToken = localStorage.getItem("token");
    try {
      const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}user/update-setting`,
        { firstname: formData.firstname, lastname: formData.lastname, email: formData.email, password: formData.password }, 
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      if (response.data.success) {
        // toast.success("Changes saved successfully!");
  
        if (response.data.emailChanged) {
          setTimeout(() => {
            localStorage.removeItem("authToken");
            window.location.href = "/login";
          }, 2000);
        }
      }
    } catch (error) {
      console.log("Failed to update details. Please try again.");
      // toast.error("Failed to update details. Please try again.");
    }
  };
  

  return (
    <div className='w-full flex flex-col bg-white p-8 rounded-lg mx-12 mr-20 my-4 h-[70vh]'>
        <label className='text-[#29A263] font-semibold'>Edit Profile</label>
        <div className='w-full flex mt-1'>
            <span className='w-[8%] h-[4px] bg-[#29A263]'></span>
            <span className='w-[92%] h-[4px]  bg-gray-300'></span>
        </div>
        <div className='mt-4 flex flex-col mt-10'>
          <label className='text-md text-gray-600'>First Name</label>
          <input className='w-[50%] border-1 border-gray-300 p-2 mt-1 rounded-lg focus:outline-none focus:border-green-800' type="text" name='firstname' value={formData.firstname} onChange={handleChange}/>
        </div>  
        <div className='mt-3 flex flex-col'>
          <label className='text-md text-gray-600'>Last Name</label>
          <input className='w-[50%] border-1 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-green-800' type="text" name='lastname' value={formData.lastname} onChange={handleChange}/>
        </div>  
        <div className='mt-3 flex flex-col'>
          <label className='text-md text-gray-600'>Email</label>
          <input className='w-[50%] border-1 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-green-800' type="email" name='email' value={formData.email} onChange={handleChange}/>
        </div>  
        <div className='mt-3 flex flex-col'>
          <label className='text-md text-gray-600'>Password</label>
          <input className='w-[50%] border-1 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-green-800' type="text" name='password' value={formData.password} onChange={handleChange}/>
        </div>  
        <div className='mt-3 flex flex-col'>
          <label className='text-md text-gray-600'>Confirm Password</label>
          <input className='w-[50%] border-1 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-green-800' type="text" name='password' value={formData.password} onChange={handleChange}/>
        </div>  
        <div className="w-full flex justify-end pr-4 pb-20 ">
        <button className="bg-[#29A263] w-30 text-white text-md py-2 px-6 mt-8 rounded-lg" onClick={saveChanges}>
          Save
        </button>
        </div>
    </div>
  )
}

export default Setting