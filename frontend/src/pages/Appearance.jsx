import React from "react";
import Logo from "../assets/Logo.svg";
import IconLinks from "../assets/IconLinks.svg";
import IconAppearance from "../assets/IconAppearance.svg";
import IconAnalytics from "../assets/IconAnalytics.svg";
import IconSettings from "../assets/IconSettings.svg";
import ImageBoy from "../assets/ImageBoy.svg";
import IconShare from "../assets/IconShare.svg";
import FrameMobile from "../assets/FrameMobile.svg";
import IconFire from "../assets/IconFire.svg";
import IconStack from "../assets/Layout/IconStack.svg";
import IconGrid from "../assets/Layout/IconGrid.svg";
import IconCarousel from "../assets/Layout/IconCarousel.svg";
import IconFill01 from "../assets/Buttons/IconFill01.svg";
import IconFill02 from "../assets/Buttons/IconFill02.svg";
import IconFill03 from "../assets/Buttons/IconFill02.svg";
import IconOutline01 from "../assets/Buttons/IconOutline01.svg";
import IconOutline02 from "../assets/Buttons/IconOutline02.svg";
import IconOutline03 from "../assets/Buttons/IconOutline03.svg";
import IconShadow01 from "../assets/Buttons/IconShadow01.svg";
import IconShadow02 from "../assets/Buttons/IconShadow02.svg";
import IconShadow03 from "../assets/Buttons/IconShadow03.svg";
import IconSoft01 from "../assets/Buttons/IconSoft01.svg";
import IconSoft02 from "../assets/Buttons/IconSoft02.svg";
import IconSoft03 from "../assets/Buttons/IconSoft03.svg";
import IconSpecial01 from "../assets/Buttons/IconSpecial01.svg";
import IconSpecial02 from "../assets/Buttons/IconSpecial02.svg";
import IconSpecial03 from "../assets/Buttons/IconSpecial03.svg";
import IconSpecial04 from "../assets/Buttons/IconSpecial04.svg";
import IconSpecial05 from "../assets/Buttons/IconSpecial05.svg";
import IconSpecial06 from "../assets/Buttons/IconSpecial06.svg";

function Appearance() {
  return (
    <div className="w-full h-full h-screen flex">
      {/* Frame Section */}
      <div className="w-[45%] p-8 relative">
        <img className="w-70 ml-30" src={FrameMobile} alt="" />
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
            <span className="w-10 h-10 bg-white rounded-full"></span>
            <span className="font-semibold">Latest YouTube Video</span>
          </div>

          <div className="flex w-56 items-center text-sm bg-gray-300 space-x-2 rounded-full pl-2 py-2">
            <span className="w-10 h-10 bg-white rounded-full"></span>
            <span className="font-semibold">Latest Instagram reel</span>
          </div>
        </div>
        <div className="absolute top-108 left-55 mt-20 bg-[#35CA7D] text-white text-xs px-3 py-2 rounded-full w-36 flex items-center justify-center">
          <button>Get Connected</button>
        </div>
      </div>

      {/* Right Section: Layout, Buttons, Fonts, Themes */}
      <div className="w-[55%] p-8 rounded-lg flex flex-col hide-scrollbar overflow-y-auto">
        <label className="text-xl font-semibold mb-4">Layout</label>
        <div className="rounded-lg flex min-h-64 space-x-10 w-full bg-white items-center justify-center p-4">
          <div className="flex flex-col items-center space-y-2 cursor-pointer">
              <div className="w-30 h-30 bg-gray-100 rounded-lg p-8">
                  <img src={IconStack} alt="" />
              </div> 
              <label className="font-semibold">Stack</label>
          </div>
          <div className="flex flex-col items-center space-y-2 cursor-pointer">
              <div className="w-30 h-30 bg-white border border-gray-800 rounded-lg p-8">
                  <img src={IconGrid} alt="" />
              </div> 
              <label className="font-semibold">Grid</label>
          </div>
          <div className="flex flex-col items-center space-y-2 cursor-pointer">
              <div className="w-30 h-30 bg-white border border-gray-800 rounded-lg p-8">
                  <img src={IconCarousel} alt="" />
              </div> 
              <label className="font-semibold">Carousel</label>
          </div>
        </div>

        {/* Buttons Section */}
        <label className="text-xl font-semibold mb-4 mt-10">Buttons</label>
        <div className="rounded-lg min-h-230 flex flex-col w-full bg-white p-6 space-y-4 flex">
             <label className="text-sm font-semibold text-gray-600">Fill</label>
             <div className="w-full flex justify-between bg-white">
                <img className="cursor-pointer" src={IconFill01} />
                <img className="cursor-pointer" src={IconFill02} />
                <img className="cursor-pointer" src={IconFill03} />
             </div>
             <label className="text-sm font-semibold text-gray-600 mt-5">Outline</label>
             <div className="w-full flex justify-between bg-white">
                <img className="cursor-pointer" src={IconOutline01} />
                <img className="cursor-pointer" src={IconOutline02} />
                <img className="cursor-pointer" src={IconOutline03} />
             </div>
             <label className="text-sm font-semibold text-gray-600 mt-5">Hard Shadow</label>
             <div className="w-full flex justify-between bg-white">
                <img className="cursor-pointer" src={IconShadow01} />
                <img className="cursor-pointer" src={IconShadow02} />
                <img className="cursor-pointer" src={IconShadow03} />
             </div>
             <label className="text-sm font-semibold text-gray-600 mt-5">Soft Shadow</label>
             <div className="w-full flex justify-between bg-white">
                <img className="cursor-pointer" src={IconSoft01} />
                <img className="cursor-pointer" src={IconSoft02} />
                <img className="cursor-pointer" src={IconSoft03} />
             </div>
             <label className="text-sm font-semibold text-gray-600 mt-5">Special</label>
             <div className="w-full flex justify-between bg-white">
                <img className="cursor-pointer" src={IconSpecial01} />
                <img className="cursor-pointer" src={IconSpecial02} />
                <img className="cursor-pointer" src={IconSpecial03} />
             </div>
             <div className="w-full flex justify-between bg-white ml-[-6px]">
                <img className="cursor-pointer" src={IconSpecial04} />
                <img className="cursor-pointer" src={IconSpecial05} />
                <img className="cursor-pointer" src={IconSpecial06} />
             </div>
             <label className="text-sm font-bold text-gray-800 mt-5">Button color</label>
             <div className="flex items-center space-x-3">
                <span className="w-14 h-14 rounded-lg border bg-white border-gray-200"></span>
                <div className="flex flex-col justify-center bg-gray-100 rounded-lg p-2">
                  <label className="text-gray-500 text-sm font-semibold">Button color</label>
                  <input className="" type="text" placeholder="#ffffff"/>
                </div>
             </div>
             <label className="text-sm font-bold text-gray-800 mt-5">Button font color</label>
             <div className="flex items-center space-x-3">
                <span className="w-14 h-14 rounded-lg border bg-gray-500 border-gray-200"></span>
                <div className="flex flex-col justify-center bg-gray-100 rounded-lg p-2">
                  <label className="text-gray-500 text-sm font-semibold">Button font color</label>
                  <input className="" type="text" placeholder="#888888"/>
                </div>
             </div>

        </div>

        {/* Fonts Section */}
        <label className="text-xl font-semibold mt-10 mb-4">Fonts</label>
        <div className="rounded-lg flex flex-col w-full bg-white p-6 space-y-4 flex">
            <label className="text-sm font-bold text-gray-800">Font</label>
            <div className="w-full rounded-lg p-4 border border-gray-200 flex space-x-4 items-center">
                <span className="p-2 bg-gray-100 w-14 h-14 flex items-center justify-center rounded-md">
                  <span className="font-bold">Aa</span>
                </span>
                <h4 className="font-bold">DM Sans</h4>
            </div>
            <label className="text-sm font-bold text-gray-800 mt-5">Button font color</label>
             <div className="flex items-center space-x-3">
                <span className="w-14 h-14 rounded-lg border bg-white border-gray-200"></span>
                <div className="flex flex-col justify-center bg-gray-100 rounded-lg p-2">
                  <label className="text-gray-500 text-sm font-semibold">Color</label>
                  <input className="" type="text" placeholder="#ffffff"/>
                </div>
             </div>
        </div>

          {/*Themes Section */}
          <label className="text-xl font-semibold mb-4 mt-10">Themes</label>
          <div className="rounded-lg min-h-66 w-full bg-white p-4 flex flex-col">
          
          </div>

        <div className="w-full flex justify-end pr-4 mb-30">
          <button className="bg-[#29A263] w-30 text-white text-md py-2 px-6 mt-8 rounded-lg">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Appearance;
