import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import Logo from '../assets/Logo.svg'
import IconLinks from '../assets/IconLinks.svg'
import IconAppearance from '../assets/IconAppearance.svg'
import IconAnalytics from '../assets/IconAnalytics.svg'
import IconSettings from '../assets/IconSettings.svg'
import ImageBoy from '../assets/ImageBoy.svg'
import IconShare from '../assets/IconShare.svg'
import FrameMobile from '../assets/FrameMobile.svg'
import IconFire from '../assets/IconFire.svg'
import IconSignOut from '../assets/IconSignOut.svg'

function Layout() {

  
  // To determine the active route
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(""); // Search state
  const [showToast, setShowToast] = useState(false);

  const [showLogout, setShowLogout] = useState(false);

  // Handle sign out
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const [userFullName, setUserFullName] = useState("");

//   const fetchUserDetails = async () => {
//     try {
//       const token = localStorage.getItem("authToken");
//       const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}user/profile`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
    
//       // Assuming API returns firstname and lastname
//       const { firstname, lastname } = response.data;
//       setUserFullName(`${firstname} ${lastname}`);
//     //   const userFullName = `${firstname} ${lastname}`;
//       console.log("User Full Name:", userFullName);
//     } catch (err) {
//       setError("Failed to fetch user data");
//       console.error(err);
//     }
//   };
  
const fetchUserDetails = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }
  
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`, // Make sure "Bearer" is added
        },
      });
  
      const { firstname, lastname } = response.data;
      setUserFullName(`${firstname} ${lastname}`);
      console.log("User Full Name:", `${firstname} ${lastname}`);
    } catch (err) {
      console.error("Failed to fetch user data:", err);
    }
  };
  
  
  useEffect(() => { 
    fetchUserDetails();
  }, []);

  
  return (
    <>
        <div className='w-full h-screen flex overflow-hidden'>

{/* Left Sidebar */}
<div className='w-[15%] flex flex-col relative fixed h-screen'>
    <img className='p-8' src={Logo} alt="" />
    <Link to="/links" className={`flex mt-2 p-4 pl-6 space-x-4 cursor-pointer ${
            location.pathname === "/links"
            ? "bg-gray-100 text-green-600 font-semibold"
            : "bg-white text-black" }`}>
        <img src={IconLinks} alt="" />
        <span>Links</span>
    </Link>
    <Link to="/appearance" className={`flex mt-2 p-4 pl-6 space-x-4 cursor-pointer ${
            location.pathname === "/appearance"
            ? "bg-gray-100 text-green-600 font-semibold"
            : "bg-white text-black" }`}>
        <img src={IconAppearance} alt="" />
        <span>Appearance</span>
    </Link>
    <Link to="/analytics" className={`flex mt-2 p-4 pl-6 space-x-4 cursor-pointer ${
            location.pathname === "/analytics"
            ? "bg-gray-100 text-green-600 font-semibold"
            : "bg-white text-black" }`}>
        <img src={IconAnalytics} alt="" />
        <span>Analytics</span>
    </Link>
    <Link to="/setting" className={`flex mt-2 p-4 pl-6 space-x-4 cursor-pointer ${
            location.pathname === "/setting"
            ? "bg-gray-100 text-green-600 font-semibold"
            : "bg-white text-black" }`}>
        <img src={IconSettings} alt="" />
        <span>Settings</span>
    </Link>
{/* Profile + Floating Sign Out */}
<div className='absolute bottom-6 left-6 flex flex-col items-center'>
            {/* Profile Pill */}
            <div
              onClick={() => setShowLogout(!showLogout)}
              className='flex items-center px-3 py-1 rounded-full font-semibold italic border border-black space-x-3 cursor-pointer'
            >
              <img src={ImageBoy} alt="User" />
              <h4>{userFullName || "User"}</h4>
            </div>

            {/* Floating Sign-Out (only shown when showLogout = true) */}
            {showLogout && (
              <div className="relative w-full flex justify-center">
                <div
                  className="absolute -top-24 left-4 bg-gray-50 border border-gray-200 shadow-md
                             px-4 py-2 w-30 rounded-full flex items-center space-x-2 cursor-pointer"
                >
                  {/* Sign Out Icon */}
                  <img src={IconSignOut} />

                  {/* Sign Out Button/Text */}
                  <button 
                    onClick={handleLogout} 
                    className="text-gray-700 font-semibold text-sm"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

{/* Right Side Content */}
<div className='w-[85%] flex flex-col bg-gray-100 h-screen'>
    <div className='flex justify-between p-8'>
        <div>
            <h1 className='text-3xl font-semibold'>Hi, {userFullName ? userFullName : "User"}!</h1>
            <p className='text-sm text-gray-600'>Congratulations . You got a great response today .</p>
        </div>
        <div onClick={() => {
              navigator.clipboard.writeText(`https://spark-tree-two.vercel.app/`);
              setShowToast(true);
              setTimeout(() => setShowToast(false), 2000);
            }} className='flex items-center items-center h-10 space-x-2 px-3 text-sm rounded-full bg-white cursor-pointer'>
            <img src={IconShare} alt="" />
            <h4 className='font-semibold'>Share</h4>
        </div>
    </div>
    <div className='flex'>

        {/* Frame Section, Profile, Links and Banner*/}
        <div className='flex w-full pr-4'>
           <Outlet context={{ searchTerm }} />
        </div>
    </div>
</div>
</div>
{showToast && (
          <div className="fixed bottom-24 left-18 bg-white border border-blue-500 shadow-md rounded-lg px-10 py-2 flex items-center space-x-2">
            <i className="fa-solid fa-check-circle text-blue-500 text-lg"></i>
            <span className="text-gray-800 font-semibold">Link Copied</span>
          </div>
      )}
    </>
  )
}

export default Layout