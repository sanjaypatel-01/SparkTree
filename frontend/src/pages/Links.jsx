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

function Links() {

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
    
        const { bio, bannerImage } = response.data;
        setBio(bio);
        setBannerImage(bannerImage);
        setId(response.data.userId);
        console.log("Bio and Banner:", bio, bannerImage);
      } catch (err) {
        console.error("Failed to fetch user data:", err);
      }
    };

    const [bannerImage, setBannerImage] = useState("");
    const [bio, setBio] = useState("Bio");
    
    const setBioBanner = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          return;
        }
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}api/links`,{bannerImage, bio}, {
          headers: {
            Authorization: `Bearer ${token}`, // Make sure "Bearer" is added
          },
        });

         // 2. Update state directly from the backend response
        setBio(response.data.bio);
        setBannerImage(response.data.bannerImage);
        console.log("Bio and Banner updated successfully:", response.data.bio, response.data.bannerImage);

        // If you are also using frameBg to display the color preview,
        // you can sync it with bannerImage here:
        setFrameBg(response.data.bannerImage);

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

    // Function to handle deletion of a specific link
  const handleDelete = async (linkId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      // Send DELETE request to your backend
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}api/delete-link/${linkId}`, {
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
  


    const [selected, setSelected] = useState("Stack");
    const [buttonColor, setButtonColor] = useState("#C9C9C9");
    const [buttonFontColor, setButtonFontColor] = useState("#1E1E20");

    const fetchButtonAndButtonFontDetails = async () => {
        try {
          const token = localStorage.getItem("token");
          if (!token) {
            console.error("No token found");
            return;
          }
      
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}appearance/fetch-link`, {
            headers: {
              Authorization: `Bearer ${token}`, // Make sure "Bearer" is added
            },
          });
      
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
          <div className="w-full h-full h-screen flex">
      {/* Frame Section */}
      <div className="w-[45%] p-8 relative">
        {/* <img className="w-70 ml-30" src={FrameMobile} alt="" /> */}
        <div className= "relative w-70 ml-30 h-140 flex justify-center bg-white border-12 border-black rounded-4xl">
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
        <div className="absolute top-106 left-55 mt-20 bg-[#35CA7D] text-white text-xs px-3 py-2 rounded-full w-36 flex items-center justify-center cursor-pointer">
          <button className="cursor-pointer">Get Connected</button>
        </div>
        <img className="absolute top-136 left-64 w-18" src={LogoBlack}/>
      </div>

      {/* Right Section: Profile and Banner */}
      <div className="w-[55%] p-8 rounded-lg flex flex-col hide-scrollbar overflow-y-auto">
        <label className="text-xl font-semibold mb-4">Profile</label>
        <div className="rounded-lg flex flex-col h-80 w-full bg-white p-4">
          <div className="flex w-full">
            <img className="w-20" src={ImageBoy} alt="" />
            <div className="w-8/10 flex flex-col space-y-2 ml-6">
              <button className="rounded-full p-2 text-white text-md bg-[#28A263]">
                Pick an image
              </button>
              <button className="rounded-full p-2 text-gray-500 bg-white border border-gray-200 text-md ">
                Remove
              </button>
            </div>
          </div>
          <div className="bg-gray-100 flex flex-col w-full h-14 rounded-lg p-2 mt-10">
            <label className="text-sm text-gray-500">Profile Title</label>
            <h4 className="text-md">@{userName}</h4>
          </div>
          <div className="bg-gray-100 w-full h-20 rounded-lg p-2 mt-2 flex flex-col">
            <label className="text-sm text-gray-500">Bio</label>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} className="border-none text-md mt-1" placeholder="Bio">
              
            </textarea>
           
          </div>
        </div>

        {/* Links Section */}
        <div className="rounded-lg h-36 w-full bg-white mt-10 p-4 min-h-82 flex flex-col">
          <div className="w-full">
            <button className="rounded-full py-2 px-4 text-white text-sm bg-[#28A263] cursor-pointer">
              Add Link
            </button>
            <button className="rounded-full py-2 px-4 bg-gray-100 text-gray-600 text-sm ml-2 cursor-pointer">
              Add Shop
            </button>
          </div>
          <div className="w-full">
            <button onClick={openAddLinkModal} className="rounded-full w-full py-2 text-white text-md bg-[#28A263] mt-6 cursor-pointer hover:font-bold">
              + Add
            </button>
          </div>
          <div className='overflow-y-auto hide-scrollbar mt-6 '>
            {fetchLinks.map((link) => (
                <div key={link} className='w-full mb-4 flex flex-col space-y-2 px-6 py-4 rounded-2xl min-h-24 bg-gray-100'>
                  <span className='font-semibold text-md'>Instagram</span>
                  <div className='flex justify-between'>
                  <a
                    key={link._id} 
                    href={link.url.startsWith('http') ? link.url : `http://${link.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  ><span className='text-gray-600 text-sm'>https://www.{link.title}.com/{userName}/</span>    </a>
                      <img onClick={() => handleDelete(link._id)} className='cursor-pointer hover:scale-120' src={IconDelete} />
                    </div>
                  </div>
            ))}
          </div>
        </div>

        {/* Banner Section */}
        <label className="text-xl font-semibold mt-6 mb-4">Banner</label>
        <div className="rounded-lg flex flex-col h-116 w-full bg-white p-6">
          <div className="p-4 rounded-lg h-60 flex flex-col items-center justify-center border-1 border-gray-200" style={{ backgroundColor: bannerImage }}>
            <img className="w-30" src={ImageBoy} alt="" />
            {/* <h4 className="text-white text-2xl font-bold">@sanjay_08</h4> */}
            <h4 className={`text-2xl font-bold ${frameBg === "#FFFFFF" ? "text-gray-700" : "text-white"}`}>@{userName}</h4>
            <h3 className="text-lg text-gray-400 flex">
              <img className="w-5" src={IconFire} />
              /{userName}
            </h3>
          </div>
          <label className="text-md font-semibold mt-4">
            Custom Background Color
          </label>
          <div className="w-full flex mt-2 space-x-2">
            <span onClick={() => setBannerImage("#342B26")} className="rounded-full w-12 h-12 bg-[#342B26] cursor-pointer"></span>
            <span onClick={() => setBannerImage("#FFFFFF")} className="rounded-full w-12 h-12 bg-[#FFFFFF] border-1 border-gray-200 cursor-pointer"></span>
            <span onClick={() => setBannerImage("#000000")} className="rounded-full w-12 h-12 bg-[#000000] cursor-pointer"></span>
          </div>
          <div className="flex w-full mt-4 space-x-2">
            <span className="rounded-lg w-12 h-12 border-1 border-gray-200" style={{ backgroundColor: bannerImage }}></span>
            <input
              className="ml-2 rounded-lg bg-gray-100 px-2"
              type="text"
              maxLength={7}
              placeholder="#000000"
              // value={`#${frameBg.replace("#", "")}` || `${bannerImage}`}
              value={bannerImage}
              onChange={(e) => {
                const value = e.target.value.replace("#", ""); 
                if (value.length <= 6) {
                  handleFrameBgChange(`#${value}`); setBannerImage(`${e.target.value}`); 
                }
              }}
            />
          </div>
        </div>
        <div className="w-full flex justify-end pr-4 mb-30">
          <button onClick={setBioBanner} className="bg-[#29A263] w-30 text-white text-md py-2 px-6 mt-8 rounded-lg cursor-pointer hover:font-bold">
            Save
          </button>
        </div>
      </div>
    </div>

    {isAddLinkModalOpen && <AddLinkModal onClose={closeAddLinkModal} />}

    {showToast && (
          <div className="fixed bottom-24 left-18 bg-white border border-blue-500 shadow-md rounded-lg px-10 py-2 flex items-center space-x-2">
            <i className="fa-solid fa-check-circle text-blue-500 text-lg"></i>
            <span className="text-gray-800 font-semibold">Link Copied</span>
          </div>
      )}

    </>
  );
}

export default Links;
