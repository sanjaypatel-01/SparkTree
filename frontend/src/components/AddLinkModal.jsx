import React, { useState } from 'react'
import LogoFacebook from "../assets/ApplicationsIcons/Facebook.svg";
import LogoInstagram from "../assets/ApplicationsIcons/Instagram.svg";
import LogoYoutube from "../assets/ApplicationsIcons/Youtube.svg";
import LogoTwitter from "../assets/ApplicationsIcons/Twitter.svg";
import IconDelete from "../assets/IconDelete.svg";
import IconCopy from "../assets/IconCopy.svg";

function AddLinkModal({ onClose}) {

    const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
        <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 backdrop-brightness-50 z-50">
      <div className="bg-gray-50 rounded-lg scale-100 w-2/7 h-[54%] relative overflow-hidden shadow-lg p-4">
        <div className='flex space-x-2'>
            <span className='rounded-2xl px-3 text-sm py-1 text-white bg-[#28A263]'>Add Link</span>
            <span className='rounded-2xl px-3 text-sm py-1 text-gray-800 bg-gray-200'>Add Shop</span>
        </div>
        <div className='w-full h-[70%] flex flex-col shadow-2xl rounded-2xl mt-6 p-3'>
            <label className='text-md font-semibold'>Enter URL</label>
            <div className='relative flex items-center'>
              <input type='text' className='w-[86%] h-8 bg-gray-100 border border-gray-100 mt-2 text-sm rounded-2xl px-2' placeholder='Link title' />
              <div
                className={`w-10 h-6 rounded-full flex items-center cursor-pointer ml-2 transition duration-300 ${toggle ? 'bg-[#28A263]' : 'bg-gray-200'}`}
                onClick={handleToggle}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-md transform transition duration-300 ${toggle ? 'translate-x-4' : 'translate-x-0'}`}
                ></div>
              </div>
            </div>
            <div className='flex justify-between mt-2'>
                <input type='text' className='w-[86%] h-8 bg-gray-100 border border-gray-100 text-sm rounded-2xl px-2' placeholder='Link Url'/>
                <img className='cursor-pointer' src={IconCopy}/>
                <img className='cursor-pointer' src={IconDelete}/>
            </div>
            
            <label className='text-sm font-semibold mt-8 text-gray-800'>Applications</label>
            <div className='w-full h-24 flex mt-2 space-x-4 rounded-lg px-3 items-center'>
                <div className='flex flex-col items-center space-y-1 '>
                    <span className='w-12 h-12 rounded bg-gray-100 shadow flex justify-center items-center cursor-pointer'> <img src={LogoInstagram}/> </span>
                    <label className='text-xs text-gray-700'>Instagram</label>
                </div>
                <div className='flex flex-col items-center space-y-1 '>
                    <span className='w-12 h-12 rounded bg-gray-100 shadow flex justify-center items-center cursor-pointer'> <img src={LogoFacebook}/> </span>
                    <label className='text-xs text-gray-700'>Facebook</label>
                </div>
                <div className='flex flex-col items-center space-y-1 '>
                    <span className='w-12 h-12 rounded bg-gray-100 shadow flex justify-center items-center cursor-pointer'> <img src={LogoYoutube}/> </span>
                    <label className='text-xs text-gray-700'>Youtube</label>
                </div>
                <div className='flex flex-col items-center space-y-1'>
                    <span className='w-12 h-12 rounded bg-gray-100 shadow p-2 flex justify-center items-center cursor-pointer'> <img src={LogoTwitter}/> </span>
                    <label className='text-xs text-gray-700'>X</label>
                </div>
            </div>
        </div>
            <button onClick={onClose} className='rounded-full px-4 text-md py-1  text-white text-md bg-gray-500 mt-10 cursor-pointer'>close</button>
      </div>
    </div>

    </>
    
  )
}

export default AddLinkModal