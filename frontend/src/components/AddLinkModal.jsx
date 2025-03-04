import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import LogoFacebook from "../assets/ApplicationsIcons/Facebook.svg";
import LogoInstagram from "../assets/ApplicationsIcons/Instagram.svg";
import LogoYoutube from "../assets/ApplicationsIcons/Youtube.svg";
import LogoTwitter from "../assets/ApplicationsIcons/Twitter.svg";
import IconDelete from "../assets/IconDelete.svg";
import IconCopy from "../assets/IconCopy.svg";

function AddLinkModal({ onClose}) {

  const [toggle, setToggle] = useState(false);
  const [activeToggle, setActiveToggle] = useState("link");

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const [linkDetails, setLinkDetails] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [application, setApplication] = useState("Instagram");

      
  const fetchLinksDetails = async () => {
    if (toggle === true) {
      return;
    };
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }
  
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}api/create-link`,
        { title, url, application },
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );
  
      console.log("Link created successfully:", response.data);
      setLinkDetails(`Title: ${title}, URL: ${url}, Application: ${application}`);
      onClose();
    } catch (err) {
      console.error("Failed to fetch user data:", err);
    }
  };

      const handleEdit = async (linkId) => {
        try {
          const token = localStorage.getItem("token");
          if (!token) {
            console.error("No token found");
            return;
          }
    
          // Send DELETE request to your backend
          await axios.put(`${import.meta.env.VITE_BACKEND_URL}api/edit-link/${linkId}`,
            { title, url, application }, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
    
          // Update state by filtering out the deleted link
          setFetchLinks(fetchLinks.filter((link) => link._id !== linkId));
          console.log("Link deleted successfully");
        } catch (err) {
          console.error("Error deleting link:", err);
        }
      };
  
  

  return (
    <>
        <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 backdrop-brightness-50 z-50">
      <div className="bg-gray-50 rounded-lg scale-100 w-2/7 h-[54%] relative overflow-hidden shadow-lg p-4">
        {/* <div className='flex space-x-2'>
            <span className='rounded-2xl px-3 text-sm py-1 text-white bg-[#28A263]'>Add Link</span>
            <span className='rounded-2xl px-3 text-sm py-1 text-gray-800 bg-gray-200'>Add Shop</span>
        </div> */}

        <div className="flex space-x-2">
          <span
            onClick={() => setActiveToggle("link")}
            className={`cursor-pointer rounded-2xl px-3 text-sm py-1 ${
              activeToggle === "link" ? "text-white bg-[#28A263]" : "text-gray-800 bg-gray-200"
            }`}
          >
            Add Link
          </span>
          <span
            onClick={() => setActiveToggle("shop")}
            className={`cursor-pointer rounded-2xl px-3 text-sm py-1 ${
              activeToggle === "shop" ? "text-white bg-[#28A263]" : "text-gray-800 bg-gray-200"
            }`}
          >
            Add Shop
          </span>
        </div>

        <div className='w-full h-[70%] flex flex-col shadow-2xl rounded-2xl mt-6 p-3'>
            <label className='text-md font-semibold'>Enter URL</label>
            <div className='relative flex items-center'>
              <input value={title} onChange={(e) => setTitle(e.target.value)} type='text' className='w-[86%] h-8 bg-gray-100 border border-gray-100 mt-2 text-sm rounded-2xl px-2' placeholder='Link title' />
              <div
                className={`w-10 h-6 rounded-full flex items-center cursor-pointer ml-2 transition duration-300 ${toggle ? 'bg-[#28A263]' : 'bg-gray-200'}`}
                onClick={() => {handleToggle(), fetchLinksDetails()}} 
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-md transform transition duration-300 ${toggle ? 'translate-x-4'  : 'translate-x-0'}`}
                ></div>
              </div>
            </div>
            <div className='flex justify-between mt-2'>
                <input value={url} onChange={(e) => setUrl(e.target.value)} type='text' className='w-[86%] h-8 bg-gray-100 border border-gray-100 text-sm rounded-2xl px-2' placeholder='Link Url'/>
                <img className='cursor-pointer' src={IconCopy}/>
                <img className='cursor-pointer' src={IconDelete}/>
            </div>
            
            <label className='text-sm font-semibold mt-8 text-gray-800'>Applications</label>
            <div className='w-full h-24 flex mt-2 space-x-4 rounded-lg px-3 items-center'>
                <div value={application} onClick={() => {setApplication("instagram")}}  className='flex flex-col items-center space-y-1 '>
                    <span className='w-12 h-12 rounded bg-gray-100 shadow flex justify-center items-center cursor-pointer'> <img src={LogoInstagram}/> </span>
                    <label className='text-xs text-gray-700'>Instagram</label>
                </div>
                <div value={application} onClick={() => {setApplication("facebook")}}  className='flex flex-col items-center space-y-1 '>
                    <span className='w-12 h-12 rounded bg-gray-100 shadow flex justify-center items-center cursor-pointer'> <img src={LogoFacebook}/> </span>
                    <label className='text-xs text-gray-700'>Facebook</label>
                </div>
                <div value={application} onClick={() => {setApplication("youtube")}}  className='flex flex-col items-center space-y-1 '>
                    <span className='w-12 h-12 rounded bg-gray-100 shadow flex justify-center items-center cursor-pointer'> <img src={LogoYoutube}/> </span>
                    <label className='text-xs text-gray-700'>Youtube</label>
                </div>
                <div value={application} onClick={() => {setApplication("twitter")}}  className='flex flex-col items-center space-y-1'>
                    <span className='w-12 h-12 rounded bg-gray-100 shadow p-2 flex justify-center items-center cursor-pointer'> <img src={LogoTwitter}/> </span>
                    <label className='text-xs text-gray-700'>X</label>
                </div>
            </div>
        </div>
            <button onClick={onClose} className='rounded-full px-4 text-md py-1  text-white text-md bg-gray-500 mt-10 cursor-pointer hover:scale-105 hover:font-semibold'>close</button>
      </div>
    </div>

    </>
    
  )
}

export default AddLinkModal