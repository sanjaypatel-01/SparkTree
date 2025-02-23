import React from 'react'
import Logo from '../assets/Logo.svg'
import IconLinks from '../assets/IconLinks.svg'
import IconAppearance from '../assets/IconAppearance.svg'
import IconAnalytics from '../assets/IconAnalytics.svg'
import IconSettings from '../assets/IconSettings.svg'
import ImageBoy from '../assets/ImageBoy.svg'
import IconShare from '../assets/IconShare.svg'
import FrameMobile from '../assets/FrameMobile.svg'
import IconFire from '../assets/IconFire.svg'

function Linkss() {
  return (
    <div className='w-full h-screen flex'>

        {/* Left Sidebar */}
        <div className='w-[15%] flex flex-col relative fixed h-screen'>
            <img className='p-8' src={Logo} alt="" />
            <div className='flex mt-2 p-4 pl-6 font-semibold space-x-4 bg-gray-100'>
                <img src={IconLinks} alt="" />
                <label>Links</label>  
            </div>
            <div className='flex mt-2 p-4 pl-6 space-x-4'>
                <img src={IconAppearance} alt="" />
                <label>Appearance</label>     
            </div>
            <div className='flex mt-2 p-4 pl-6 space-x-4'>
                <img src={IconAnalytics} alt="" />
                <label>Analytics</label>  
            </div>
            <div className='flex mt-2 p-4 pl-6 space-x-4'>
                <img src={IconSettings} alt="" />
                <label>Settings</label>  
            </div>
            <div className='absolute bottom-6 flex items-center px-3 py-1 ml-6 rounded-full font-semibold italic border-1 border-black space-x-3'>
                <img src={ImageBoy} alt="" />
                <h4>Sanjay Patel</h4>
            </div>
        </div>

        {/* Right Side Content */}
        <div className='w-[85%] flex flex-col bg-gray-100 h-screen'>
            <div className='flex justify-between p-8'>
                <div>
                    <h1 className='text-3xl font-semibold'>Hi, Sanjay Patel!</h1>
                    <p className='text-sm text-gray-600'>Congratulations . You got a great response today .</p>
                </div>
                <div className='flex items-center items-center space-x-2 px-3 text-sm rounded-full bg-white'>
                    <img src={IconShare} alt="" />
                    <h4 className='font-semibold'>Share</h4>
                </div>
            </div>
            <div className='flex'>

                {/* Frame Section */}
                <div className='w-[45%] p-8 relative'>
                    <img className='w-70 ml-30' src={FrameMobile} alt="" />
                    <h2 className="absolute top-24 left-60 mt-20 text-white font-bold text-xl">
                        @sanjay_08
                    </h2>
                    <div className="absolute top-44 left-52 mt-20 flex items-center w-42 bg-gray-300 rounded-full p-1 mb-6">
                        <button className="px-8 py-1 rounded-full transition-colors bg-[#28A263] text-white">
                            link
                        </button>
                        <button className="px-4 py-1 rounded-full transition-colors text-gray-700">
                            Shop
                        </button>
                    </div>
                    <div className="absolute top-62 left-46 mt-20 space-y-3 w-full max-w-md">
                        <div className="flex w-56 items-center text-sm bg-gray-300 space-x-2 rounded-full pl-2 py-2">
                            <span className='w-10 h-10 bg-white rounded-full'></span>
                            <span className="font-semibold">Latest YouTube Video</span>
                        </div>

                        <div className="flex w-56 items-center text-sm bg-gray-300 space-x-2 rounded-full pl-2 py-2">
                            <span className='w-10 h-10 bg-white rounded-full'></span>
                            <span className="font-semibold">Latest Instagram reel</span>
                        </div>
                    </div>
                    <div className='absolute top-108 left-55 mt-20 bg-[#35CA7D] text-white text-xs px-3 py-2 rounded-full w-36 flex items-center justify-center'>
                        <button>Get Connected</button>
                    </div>
                </div>

                {/* Right Section: Profile and Banner */}
                <div className='w-[55%] p-8 bg-gray-200 rounded-lg flex flex-col overflow-y-auto'>
                    <label className='text-xl font-semibold mb-4'>Profile</label>
                    <div className='rounded-lg flex flex-col h-80 w-full bg-white p-4'>
                        <div className='flex w-full'>
                            <img className='w-20' src={ImageBoy} alt="" />
                            <div className='w-8/10 flex flex-col space-y-2 ml-6'> 
                                <button className='rounded-full p-2 text-white text-md bg-[#28A263]'>Pick an image</button> 
                                <button className='rounded-full p-2 text-gray-500 bg-white border border-gray-200 text-md '>Remove</button> 
                            </div>
                        </div>
                        <div className='bg-gray-100 flex flex-col w-full h-14 rounded-lg p-2 mt-10'>
                            <label className='text-sm text-gray-500'>Profile Title</label>
                            <h4 className='text-md'>@sanjay_08</h4>
                        </div>
                        <div className='bg-gray-100 w-full h-20 rounded-lg p-2 mt-2 flex flex-col'>
                            <label className='text-sm text-gray-500'>Bio</label>
                            <textarea className='border-none text-md mt-1' name="" id="">Bio</textarea>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className='rounded-lg h-36 w-full bg-white mt-10 p-4 flex flex-col'>
                        <div className='w-full'>
                            <button className='rounded-full py-2 px-4 text-white text-sm bg-[#28A263]'>Add Link</button>
                            <button className='rounded-full py-2 px-4 bg-gray-100 text-gray-600 text-sm ml-2'>Add Shop</button>
                        </div>
                        <div className='w-full'>
                            <button className='rounded-full w-full py-2 text-white text-md bg-[#28A263] mt-6'>+ Add</button>
                        </div>
                    </div>

                    {/* Banner Section */}
                    <label className='text-xl font-semibold mt-6 mb-4'>Banner</label>
                    <div className='rounded-lg flex flex-col h-116 w-full bg-white p-6'>
                        <div className='p-4 bg-[#342B26] rounded-lg h-60 flex flex-col items-center justify-center'>
                            <img className='w-30' src={ImageBoy} alt="" />
                            <h4 className='text-white text-2xl font-bold'>@sanjay_08</h4>
                            <h3 className='text-lg text-gray-400 flex'><img className='w-5' src={IconFire}/>/sanjay_08</h3>
                        </div>
                        <label className='text-md font-semibold mt-4'>Custom Background Color</label>
                        <div className='w-full flex mt-2 space-x-2'>
                            <span className='rounded-full w-12 h-12 bg-[#342B26]'></span>
                            <span className='rounded-full w-12 h-12 bg-[#FFFFFF] border-1 border-gray-200'></span>
                            <span className='rounded-full w-12 h-12 bg-[#000000]'></span>
                        </div>
                        <div className='flex w-full mt-4 space-x-2'>
                            <span className='rounded-lg w-12 h-12 bg-[#000000]'></span>
                            <input className='ml-2 rounded-lg bg-gray-100 px-2' type="number" placeholder='#000000' />
                        </div>
                    </div>
                    <div className='w-full flex justify-end pr-4'>
                        <button className='bg-[#29A263] w-30 text-white text-md py-2 px-6 mt-8 rounded-lg'>Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Linkss