import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import Logo from "../assets/Logo.svg";
import IconLinks from "../assets/IconLinks.svg";
import IconAppearance from "../assets/IconAppearance.svg";
import IconAnalytics from "../assets/IconAnalytics.svg";
import IconSettings from "../assets/IconSettings.svg";
import ImageBoy from "../assets/ImageBoy.svg";
import IconShare from "../assets/IconShare.svg";
import FrameShareIcon from "../assets/FrameShareIcon.svg";
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
import LogoBlack from "../assets/LogoBlack.svg";
import LogoInstagram from "../assets/ApplicationsIcons/Instagram.svg";
import LogoYoutube from "../assets/ApplicationsIcons/Youtube.svg";

function Appearance() {

  const [frameBg, setFrameBg] = useState("#ffffff");
  const [frameTopBg, setFrameTopBg] = useState("#342B26");
  const [frameButtonBg, setFrameButtonBg] = useState("bg-gray-300");
  const [showToast, setShowToast] = useState(false);

  const handleThemeButtonChange = (color) => {
    setFrameButtonBg(color);
  };

  const handleFrameBgChange = (color) => {
    setFrameBg(color); 
  }

  const [selected, setSelected] = useState("Stack");

  const handleClick = (label) => {
    setSelected(label);
  };

  const layouts = [
    { label: "Stack", icon: IconStack },
    { label: "Grid", icon: IconGrid },
    { label: "Carousel", icon: IconCarousel }
  ];

  const [userName, setUserName] = useState("");
      
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
    
        const { username } = response.data;
        setUserName(`${username}`);
        console.log("User Full Name:", `${username}`);
      } catch (err) {
        console.error("Failed to fetch user data:", err);
      }
    };

    
    const [fetchLinks, setFetchLinks] = useState([]);

    const fetchLinkDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          return;
        }
    
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}api/fetch-link`, {
          headers: {
            Authorization: `Bearer ${token}`, // Make sure "Bearer" is added
          },
        });
    
        setFetchLinks(response.data.links);
        console.log(response.data.links);
      } catch (err) {
        console.error("Failed to fetch user data:", err);
      }
    };
    
    const [bannerImage, setBannerImage] = useState("");

    const [id, setId] = useState("");

        const fetchBioBannerDetails = async () => {
          try {
            const token = localStorage.getItem("token");
            if (!token) {
              console.error("No token found");
              return;
            }
        
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}api/getlinks`, {
              headers: {
                Authorization: `Bearer ${token}`, // Make sure "Bearer" is added
              },
            });
        
            const { bannerImage } = response.data;
            setBannerImage(bannerImage);
            setId(response.data.userId);
            console.log("Bio and Banner:", bannerImage);
            console.log("banner", response.data)
          } catch (err) {
            console.error("Failed to fetch user data:", err);
          }
        };
    

        useEffect(() => { 
          fetchUserDetails();
          fetchLinkDetails();
          fetchBioBannerDetails();
        }, []);

  return (
    <>
        <div className="w-full h-full h-screen flex">
      {/* Frame Section */}
      <div className="w-[45%] p-8 relative">
        <div className= "relative w-70 ml-30 h-140 flex justify-center bg-white border-12 border-black rounded-4xl">
          <div className={`absolute top-0 left-0 w-full h-full rounded-3xl rounded-b-2xl ${frameBg}`}></div>
          <div className="absolute top-0 left-0 w-full h-[34%] rounded-2xl shadow-lg rounded-b-3xl" style={{ backgroundColor: bannerImage}}></div>
          <img className="absolute w-20 top-10" src={ImageBoy}  />
          <img  onClick={() => {
                      navigator.clipboard.writeText(`https://spark-tree-two.vercel.app/frame/${id}`);
                      setShowToast(true);
                      setTimeout(() => setShowToast(false), 2000);
                    }}  className='absolute top-3 left-3 w-9 cursor-pointer' src={FrameShareIcon} />
        </div>
        <h2 className="absolute top-24 left-62 mt-20 text-white font-bold text-xl">
          @{userName}
        </h2>
        <div className="absolute top-44 left-52 mt-18 flex items-center w-42 bg-gray-300 rounded-full p-1 mb-6">
          <button className="px-8 py-1 rounded-full transition-colors bg-[#28A263] text-white cursor-pointer">
            link
          </button>
          <button className="px-4 py-1 rounded-full transition-colors text-gray-700 cursor-pointer">
            Shop
          </button>
        </div>
        {/* <div className="absolute top-62 left-46 mt-16 space-y-3 w-56 max-w-md overflow-y-auto max-h-44 hide-scrollbar">

          {fetchLinks.map((link) => (
              <a
              key={link._id} 
              href={link.url.startsWith('http') ? link.url : `http://${link.url}`}
              target="_blank"
              rel="noopener noreferrer"
              >
              <div key={link} className="flex w-56 items-center text-sm bg-gray-300 space-x-2 rounded-full pl-2 py-2 cursor-pointer mb-3">
                <span className="w-10 h-10 bg-white rounded-full flex justify-center items-center p-2"> <img src={LogoYoutube} /></span>
                <span className="font-semibold">{link.title}</span>
              </div>
            </a>
          ))}

        </div> */}
        {selected === "Stack" && (
  <div className="absolute top-62 left-46 mt-16 space-y-3 w-56 max-w-md overflow-y-auto max-h-44 hide-scrollbar">
    {fetchLinks.map((link) => (
      <a
        key={link._id} 
        href={link.url.startsWith('http') ? link.url : `http://${link.url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex w-56 items-center text-sm bg-gray-300 space-x-2 rounded-full pl-2 py-2 cursor-pointer mb-3">
          <span className="w-10 h-10 bg-white rounded-full flex justify-center items-center p-2">
            <img src={LogoYoutube} alt="Youtube" />
          </span>
          <span className="font-semibold">{link.title}</span>
        </div>
      </a>
    ))}
  </div>
)}

{selected === "Grid" && (
  <div className="absolute top-62 left-46 mt-16 grid grid-cols-2 gap-4 w-56 max-w-md overflow-y-auto max-h-44 hide-scrollbar">
    {fetchLinks.map((link) => (
      <a
        key={link._id} 
        href={link.url.startsWith('http') ? link.url : `http://${link.url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex flex-col items-center text-sm bg-gray-300 rounded-lg p-2 cursor-pointer">
          <span className="w-10 h-10 bg-white rounded-full flex justify-center items-center mb-1">
            <img src={LogoYoutube} alt="Youtube" />
          </span>
          <span className="font-semibold">{link.title}</span>
        </div>
      </a>
    ))}
  </div>
)}

{selected === "Carousel" && (
  <div className="absolute top-70 left-46 mt-16 flex space-x-4 w-56 max-w-md overflow-x-auto hide-scrollbar">
    {fetchLinks.map((link) => (
      <a
        key={link._id} 
        href={link.url.startsWith('http') ? link.url : `http://${link.url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex flex-col items-center min-w-22 text-sm bg-gray-300 rounded-lg p-2 cursor-pointer">
          <span className="w-10 h-10 bg-white rounded-full flex justify-center items-center mb-1">
            <img src={LogoYoutube} alt="Youtube" />
          </span>
          <span className="font-semibold">{link.title}</span>
        </div>
      </a>
    ))}
  </div>
)}

        <div className="absolute top-106 left-55 mt-20 bg-[#35CA7D] text-white text-xs px-3 py-2 rounded-full w-36 flex items-center justify-center cursor-pointer">
          <button className="cursor-pointer">Get Connected</button>
        </div>
        <img className="absolute top-136 left-64 w-18" src={LogoBlack}/>
      </div>

      {/* Right Section: Layout, Buttons, Fonts, Themes */}
      <div className="w-[55%] p-8 rounded-lg flex flex-col hide-scrollbar overflow-y-auto">
        <label className="text-xl font-semibold mb-4">Layout</label>
        <div className="rounded-lg flex min-h-64 space-x-10 w-full bg-white items-center justify-center p-4">
          <div className="flex flex-col items-center space-y-2 cursor-pointer">
          <div onClick={() => handleClick("Stack")} className={`w-30 h-30 rounded-lg p-8 ${selected === "Stack" ? "bg-gray-100" : "bg-white border border-gray-800"}`}>
                  <img src={IconStack} alt="" />
              </div> 
              <label className="font-semibold">Stack</label>
          </div>
          <div className="flex flex-col items-center space-y-2 cursor-pointer">
          <div onClick={() => handleClick("Grid")} className={`w-30 h-30 rounded-lg p-8 ${selected === "Grid" ? "bg-gray-100" : "bg-white border border-gray-800"}`}>
                  <img src={IconGrid} alt="" />
              </div> 
              <label className="font-semibold">Grid</label>
          </div>
          <div className="flex flex-col items-center space-y-2 cursor-pointer">
          <div onClick={() => handleClick("Carousel")} className={`w-30 h-30 rounded-lg p-8 ${selected === "Carousel" ? "bg-gray-100" : "bg-white border border-gray-800"}`}>
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
             <div className="w-full flex justify-between bg-white">
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
          <div className="rounded-lg min-h-124 w-full bg-white p-6 px-10 flex flex-col space-y-6">
              <div className="flex w-full justify-between">   
                <div className="flex flex-col space-y-1 items-center justify-center">
                  <div className="bg-white rounded-lg border border-gray-300 h-46 w-30 p-2 flex flex-col justify-center space-y-1 items-center cursor-pointer"
                       onClick={() => {handleThemeButtonChange("bg-gray-800"); handleFrameBgChange("bg-white")}}>
                    <span className="w-full h-4 rounded-sm bg-gray-800"></span>
                    <span className="w-full h-4 rounded-sm bg-gray-800"></span>
                    <span className="w-full h-4 rounded-sm bg-gray-800"></span>         
                  </div>
                  <label className="text-sm">Air Snow</label>
                </div>
                <div className="flex flex-col space-y-1 items-center justify-center">
                  <div className="bg-[#E0E2D9] rounded-lg border border-gray-300 h-46 w-30 p-2 flex flex-col justify-center space-y-1 items-center cursor-pointer"
                   onClick={() => {handleThemeButtonChange("bg-white"); handleFrameBgChange("bg-[#E0E2D9]")}}>
                    <span className="w-full h-4 rounded-sm bg-white"></span>
                    <span className="w-full h-4 rounded-sm bg-white"></span>
                    <span className="w-full h-4 rounded-sm bg-white"></span>         
                  </div>
                  <label className="text-sm">Air Grey</label>
                </div>
                <div className="flex flex-col space-y-1 items-center justify-center">
                  <div className="bg-[#272d2f] rounded-lg border border-gray-300 h-46 w-30 p-2 flex flex-col justify-center space-y-1 items-center cursor-pointer"
                  onClick={() => {handleThemeButtonChange("bg-white"); handleFrameBgChange("bg-[#272d2f]")}}>
                    <span className="w-full h-4 rounded-sm bg-white"></span>
                    <span className="w-full h-4 rounded-sm bg-white"></span>
                    <span className="w-full h-4 rounded-sm bg-white"></span>         
                  </div>
                  <label className="text-sm">Air Smoke</label>
                </div>
                <div className="flex flex-col space-y-1 items-center justify-center">
                  <div className="bg-black rounded-lg border border-gray-300 h-46 w-30 p-2 flex flex-col justify-center space-y-1 items-center cursor-pointer"
                  onClick={() => {handleThemeButtonChange("bg-gray-700"); handleFrameBgChange("bg-black")}}>
                    <span className="w-full h-4 rounded-sm bg-gray-700"></span>
                    <span className="w-full h-4 rounded-sm bg-gray-700"></span>
                    <span className="w-full h-4 rounded-sm bg-gray-700"></span>         
                  </div>
                  <label className="text-sm">Air Black</label>
                </div>
              </div>
              <div className="flex w-full justify-between">
               <div className="flex flex-col space-y-1 items-center justify-center">
                  <div className="bg-[#e4f5fe] rounded-lg border border-gray-300 h-46 w-30 p-2 flex flex-col justify-center space-y-1 items-center cursor-pointer"
                  onClick={() => {handleThemeButtonChange("bg-[#e4f5fe]"); handleFrameBgChange("bg-[#e4f5fe]")}}>
                    <span className="w-full h-4 rounded-lg bg-none border border-gray-300"></span>
                    <span className="w-full h-4 rounded-lg bg-none border border-gray-300"></span>
                    <span className="w-full h-4 rounded-lg bg-none border border-gray-300"></span>         
                  </div>
                  <label className="text-sm">Mineral Blue</label>
                </div>
                <div className="flex flex-col space-y-1 items-center justify-center">
                  <div className="bg-[#e5f9ef] rounded-lg border border-gray-300 h-46 w-30 p-2 flex flex-col justify-center space-y-1 items-center cursor-pointer"
                  onClick={() => {handleThemeButtonChange("bg-[#e5f9ef]"); handleFrameBgChange("bg-[#e5f9ef]")}}>
                    <span className="w-full h-4 rounded-lg bg-none border border-gray-300"></span>
                    <span className="w-full h-4 rounded-lg bg-none border border-gray-300"></span>
                    <span className="w-full h-4 rounded-lg bg-none border border-gray-300"></span>         
                  </div>
                  <label className="text-sm">Mineral Green</label>
                </div>
                <div className="flex flex-col space-y-1 items-center justify-center">
                  <div className="bg-[#fcefe3] rounded-lg border border-gray-300 h-46 w-30 p-2 flex flex-col justify-center space-y-1 items-center cursor-pointer"
                  onClick={() => {handleThemeButtonChange("bg-[#fcefe3]"); handleFrameBgChange("bg-[#fcefe3]")}}>
                    <span className="w-full h-4 rounded-lg bg-none border border-gray-300"></span>
                    <span className="w-full h-4 rounded-lg bg-none border border-gray-300"></span>
                    <span className="w-full h-4 rounded-lg bg-none border border-gray-300"></span>         
                  </div>
                  <label className="text-sm">Mineral Orange</label>
                </div>
                <div className="flex flex-col space-y-1 items-center justify-center">
                  <div className="bg-whiteh-46 w-30 p-2">

                  </div>  
                </div>
              </div>
          </div>

        <div className="w-full flex justify-end pr-4 mb-30">
          <button className="bg-[#29A263] w-30 text-white text-md py-2 px-6 mt-8 rounded-lg cursor-pointer">
            Save
          </button>
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
  );
}

export default Appearance;
