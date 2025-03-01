import React, { useState } from 'react'
import Frame from '../assets/Frame.svg'
import Logo from '../assets/Logo.svg'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const categories = [
    { id: 1, name: 'Business', icon: '💼' },
    { id: 2, name: 'Creative', icon: '🎨' },
    { id: 3, name: 'Education', icon: '📚' },
    { id: 4, name: 'Entertainment', icon: '🎬' },
    { id: 5, name: 'Fashion & Beauty', icon: '👗' },
    { id: 6, name: 'Food & Beverage', icon: '🍕' },
    { id: 7, name: 'Government & Politics', icon: '🏛️' },
    { id: 8, name: 'Health & Wellness', icon: '❤️' },
    { id: 9, name: 'Non-Profit', icon: '💕' },
    { id: 10, name: 'Other', icon: '✨' },
    { id: 11, name: 'Tech', icon: '💻' },
    { id: 12, name: 'Travel & Tourism', icon: '✈️' },
];

function Choose() {

  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (id) => {
    setSelectedCategory(id);
  };

  const [formData, setFormData] = useState({
    username: '',})

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        const token = localStorage.getItem("token"); // Assuming you stored the token in localStorage during login

        if (!token) {
            alert("User not authenticated");
            navigate("/login");
            return;
        }

        try {
            const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}user/update`, {
                 username: formData.username,
              }, {
                headers: {
                    Authorization: `Bearer ${token}`, // Add "Bearer" before the token
                  },
            });
                console.log(response.data);
                alert ("Username Registered Successfully!");
              navigate('/links');
        } catch (error) {
            console.log(error);
            alert("something went wrong!");
        }
    }


  return (
    <div className='w-full h-screen flex'>
        <div className='w-[62%] flex flex-col'>
            <div>
                <img className='p-12' src={Logo} alt="" />
            </div>
            <form onSubmit={handleSubmit} className='px-40 flex flex-col h-full relative'>
                <h2 className='text-6xl font-extrabold tracking-[-2px]' >Tell us about yourself</h2>
                <p className='text-md text-gray-400 font-semibold mt-4'>For a personalized Spark experience</p>
                <input name='username' onChange={handleChange} value={formData.value} className='bg-[#EFF0EC] rounded-md p-3 mt-10' type="text" placeholder='Tell us your username'/>
                <label className='font-semibold text-black text-md mt-12'>Select one category that best describes your Linktree:</label>
                <div className="flex flex-wrap justify-start gap-4 mt-6">
                    {categories.map((cat) => {
                    const isSelected = cat.id === selectedCategory;
                    return (
                        <button
                        type="button"
                        key={cat.id}
                        onClick={() => handleCategoryClick(cat.id)}
                        className={`flex items-center px-4 py-2 rounded-full border cursor-pointer transition-colors duration-160
                            ${isSelected 
                            ? 'bg-green-600 text-white border-green-600' 
                            : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                            }
                        `}
                        >
                        <span className="mr-2">{cat.icon}</span>
                        <span>{cat.name}</span>
                        </button>
                    );
                    })}
                </div>
                <button type='submit' className='rounded-full p-3 mt-12 font-semibold bg-[#28A263] hover:font-bold text-white cursor-pointer transition duration-160'>Continue</button>
            </form>
        </div>
        <div className='w-[38%]'>
           <img className='h-full w-full object-cover' src={Frame} alt="" />
        </div>
    </div>
  )
}

export default Choose