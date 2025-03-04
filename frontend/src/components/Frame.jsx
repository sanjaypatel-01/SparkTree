import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import AddLinkModal from "../components/AddLinkModal";
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
import LogoBlack from "../assets/LogoBlack.svg";
import IconDelete from "../assets/IconDelete.svg";
import LogoInstagram from "../assets/ApplicationsIcons/Instagram.svg";
import LogoYoutube from "../assets/ApplicationsIcons/Youtube.svg";

function Frame() {


   const userId = useLocation().pathname.split("/").pop();
  console.log("User ID:", userId);


  const [frameBg, setFrameBg] = useState("#342B26");
  const [showToast, setShowToast] = useState(false);

  const handleFrameBgChange = (color) => {
    setFrameBg(color);
  };

  const [isAddLinkModalOpen, setIsAddLinkModalOpen] = useState(false); 

  const openAddLinkModal = () => {
  setIsAddLinkModalOpen(true);
  };

  const closeAddLinkModal = () => {
  setIsAddLinkModalOpen(false);
  };

  const [userName, setUserName] = useState("");
  
    
  const fetchUserDetails = async () => {
      try {
    
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}user/profile/${userId}`);
    
        const { username } = response.data;
        setUserName(`${username}`);
        console.log("User Full Name:", `${username}`);
      } catch (err) {
        console.error("Failed to fetch user data:", err);
      }
    };
    
    const [id, setId] = useState("");

    const fetchBioBannerDetails = async () => {
      try {
    
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}api/getlinks/${userId}`);
    
        const { bio, bannerImage } = response.data;
        setBio(bio);
        setBannerImage(bannerImage);
        console.log("Bio and Banner:", bio, bannerImage);
      } catch (err) {
        console.error("Failed to fetch user data:", err);
      }
    };

    const [bannerImage, setBannerImage] = useState("");
    const [bio, setBio] = useState("Bio");


    const [fetchLinks, setFetchLinks] = useState([]);

    const fetchLinkDetails = async () => {
      try {
    
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}api/fetch-link/${userId}`);
    
        setFetchLinks(response.data.links);
        console.log(response.data.links);
      } catch (err) {
        console.error("Failed to fetch user data:", err);
      }
    };

        const [selected, setSelected] = useState("Stack");
        const [buttonColor, setButtonColor] = useState("#C9C9C9");
        const [buttonFontColor, setButtonFontColor] = useState("#1E1E20");
    
        const fetchButtonAndButtonFontDetails = async () => {
            try {
          
              const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}appearance/fetch-link/${userId}`);
          
              const { profile } = response.data;
              const { buttonColor, buttonFontColor, layout, backgroundTheme } = profile;
    
              setButtonColor(buttonColor);
              setButtonFontColor(buttonFontColor);
              setSelected(layout);
              setFrameBg(backgroundTheme);
              setId(profile.user);
              
              console.log("Bio and Banner:", buttonColor, buttonFontColor);
            } catch (err) {
              console.error("Failed to fetch user data:", err);
            }
          };
    
    useEffect(() => { 
      fetchUserDetails();
      fetchBioBannerDetails();
      fetchLinkDetails();
      fetchButtonAndButtonFontDetails();
    }, []);


  return (
    <>
        <div className="w-full h-full h-screen flex items-center justify-center">
            {/* Frame Section */}
            <div className="w-[45%] p-8 relative">
                {/* <img className="w-70 ml-30" src={FrameMobile} alt="" /> */}
                <div className= "relative w-70 ml-30 h-140 flex justify-center bg-white border-12 border-black rounded-4xl shadow">
                <div className="absolute top-0 left-0 w-full h-full rounded-3xl rounded-b-2xl" style={{ backgroundColor: frameBg }}></div>
                <div className="absolute top-0 left-0 w-full h-[34%] rounded-2xl shadow-lg rounded-b-3xl"  style={{ backgroundColor: bannerImage}}></div>
                <img className="absolute w-20 top-10" src={ImageBoy}  />
                <img onClick={() => {
                            navigator.clipboard.writeText(`https://spark-tree-two.vercel.app/frame/${id}`);
                            setShowToast(true);
                            setTimeout(() => setShowToast(false), 2000);
                            }} 
                        className='absolute top-3 left-3 w-9 cursor-pointer' src={FrameShareIcon} />
                </div>
                <h2 className={`absolute top-24 left-62 mt-20 font-bold text-xl ${frameBg === "#FFFFFF" ? "text-gray-800" : "text-white"}`}>
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
                
 {selected === "Stack" && (
         <div className="absolute top-62 left-46 mt-16 space-y-3 w-64 max-w-md overflow-y-auto max-h-44 hide-scrollbar">
           {fetchLinks.map((link) => (
               <a
               key={link._id} 
               href={link.url.startsWith('http') ? link.url : `http://${link.url}`}
               target="_blank"
               rel="noopener noreferrer"
               >
               <div key={link} className="flex w-56 items-center text-sm bg-gray-300 space-x-2 rounded-full pl-2 py-2 cursor-pointer mb-3" style={{ backgroundColor: buttonColor}}>
                 <span className="w-10 h-10 bg-white rounded-full flex justify-center items-center p-2"> <img src={LogoYoutube} /></span>
                 <span className="font-semibold" style={{ color: buttonFontColor}}>{link.title}</span>
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
                 <div
                   className="flex flex-col items-center text-sm bg-gray-300 rounded-lg p-2 cursor-pointer"
                   style={{ backgroundColor: buttonColor }}
                 >
                   <span className="w-10 h-10 bg-white rounded-full flex justify-center items-center mb-1">
                     <img src={LogoYoutube} alt="Youtube" />
                   </span>
                   <span className="font-semibold" style={{ color: buttonFontColor }}>{link.title}</span>
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
                   <div
                     className="flex flex-col items-center min-w-22 text-sm bg-gray-300 rounded-lg p-2 cursor-pointer"
                     style={{ backgroundColor: buttonColor }}
                   >
                     <span className="w-10 h-10 bg-white rounded-full flex justify-center items-center mb-1">
                       <img src={LogoYoutube} alt="Youtube" />
                     </span>
                     <span className="font-semibold" style={{ color: buttonFontColor }}>{link.title}</span>
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

export default Frame;
