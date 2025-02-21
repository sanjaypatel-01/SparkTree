import React from 'react'
import Logo from '../assets/Logo.svg'
import IconLinks from '../assets/IconLinks.svg'
import IconAppearance from '../assets/IconAppearance.svg'
import IconAnalytics from '../assets/IconAnalytics.svg'
import IconSettings from '../assets/IconSettings.svg'
import ImageBoy from '../assets/ImageBoy.svg'

function Links() {
  return (
    <div className='w-full h-screen flex'>
        <div className='w-[15%] flex flex-col relative fixed'>
            <img className='p-8' src={Logo} alt="" />
            <div className='flex mt-2 p-4 pl-6 font-semibold space-x-4 bg-gray-200'>
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
        <div className='w-[85%] bg-gray-50 h-[200vh]'>

        </div>
    </div>
  )
}

export default Links