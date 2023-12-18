import React, { useState } from "react";
import SidebarRow from "./SidebarRow";
import "./styles/SideNav.css";
import logo from "../assets/logo.png";

import {
  BiHomeAlt,
  BiCloudUpload,
  BiFont,
  BiFile,
  BiGridAlt,
  BiHelpCircle,
  BiFileFind,
  BiLogOut,
} from "react-icons/bi";

import { GiSoundWaves } from "react-icons/gi";
import {
  MdEmail,
  MdGTranslate,
  MdOutlineCropLandscape,
  MdOutlineFlightLand,
  MdOutlineSettingsSuggest,
} from "react-icons/md";
import {
  TiSocialDribbble,
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialLinkedinCircular,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialYoutubeCircular,
} from "react-icons/ti";
import { SlSocialGoogle } from "react-icons/sl";
import {
  FaBloggerB,
  FaChartArea,
  FaChartBar,
  FaChartPie,
  FaProjectDiagram,
  FaRegGrinHearts,
  FaProductHunt,
  FaPumpSoap,
  FaNutritionix,
  FaFileImage,
} from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { FaArtstation } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { MdOutlineAttachEmail } from "react-icons/md";
import { BsFillTabletLandscapeFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { FcCollaboration } from "react-icons/fc";
import { GrDocumentImage, GrNotification } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../actions/userAction";

import german from "../assets/german.png";
import france from "../assets/france.png";
import italy from "../assets/italy.png";
import japan from "../assets/japan.png";
import portugal from "../assets/portugal.png";
import russia from "../assets/russia.png";
import spain from "../assets/spain.png";
import nigeria from "../assets/nigeria.png";
import china from "../assets/china.png";

import ebook from "../assets/ebookIcon.png";
import { useDispatch, useSelector } from "react-redux";

const SideNav = () => {
  const refresh = () => window.location.reload(true);
  const dispatch = useDispatch();

  const [isopen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleLogout = () => {
    dispatch(logout());
  };

  const menuItems = [
    {
      name: "Home",
      icon: <BiHomeAlt />,
      path: "/dashboard",
    },
    {
      name: "Transcribe",
      icon: <GiSoundWaves />,
      path: "/audio",
    },

    {
      name: "Project",
      icon: <GoProject />,
      path: "/all_project",
    },
    {
      name: "Socia media",
      icon: <TiSocialDribbble />,
      path: "/social_media",
      // subItems: [
      //   {
      //     name: "Short LinkedIn Posts",
      //     path: "/short-LinkedIn-posts",
      //     icon: <TiSocialLinkedinCircular />,
      //   },
      //   {
      //     name: "Tweets Generator",
      //     path: "/tweets-generation",
      //     icon: <TiSocialTwitter />,
      //   },

      //   {
      //     name: "Youtube Intro Generator",
      //     path: "/youtube-intro-generator",
      //     icon: <TiSocialYoutube />,
      //   },

      //   {
      //     name: "Youtube Description Generator",
      //     path: "/youtube-generator",
      //     icon: <TiSocialYoutubeCircular />,
      //   },

      //   {
      //     name: "Google Ad Description Generator",
      //     path: "/googleads",
      //     icon: <SlSocialGoogle />,
      //   },

      //   {
      //     name: "LinkedIn Ad Description Generator",
      //     path: "/linkdlnads",
      //     icon: <TiSocialLinkedin />,
      //   },

      //   {
      //     name: "Google Ad Title Generator",
      //     path: "/googletitle",
      //     icon: <BiHelpCircle />,
      //   },

      //   {
      //     name: "Instagram Captions Generator",
      //     path: "/instagram",
      //     icon: <SlSocialGoogle />,
      //   },
      //   {
      //     name: "Facebook Ad Generator",
      //     path: "/facebook",
      //     icon: <TiSocialFacebook />,
      //   },
      // ],
    },

    {
      name: "Blog & Article",
      icon: <FaBloggerB />,
      path: "/blog-and-articles",
      // subItems: [
      //   {
      //     name: "Blog Topic Generator",
      //     path: "/blogtopic",
      //     icon: <FaBloggerB />,
      //   },
      //   {
      //     name: " Blog Intro Generator",
      //     path: "/blog-intro-generator",
      //     icon: <FaBloggerB />,
      //   },

      //   {
      //     name: " Blog Section Generator",
      //     path: "/blog-section-generator",
      //     icon: <FaBloggerB />,
      //   },
      //   {
      //     name: "Blog Article Writer",
      //     path: "/blog-article-writer",
      //     icon: <FaBloggerB />,
      //   },
      // ],
    },

    // {
    //   name: "Article",
    //   icon: <FaArtstation />,
    //   path: "/article",
    //   // subItems: [
    //   //   {
    //   //     name: " Content Rephraser",
    //   //     path: "/content-rephraser",
    //   //     icon: <FaChartPie />,
    //   //   },
    //   //   {
    //   //     name: " Article/Blog Conclusion Generator",
    //   //     path: "/article-blog-conclusion",
    //   //     icon: <FaArtstation />,
    //   //   },

    //   //   {
    //   //     name: " Article Rewriter",
    //   //     path: "/articleRewriter",
    //   //     icon: <FaChartBar />,
    //   //   },
    //   //   {
    //   //     name: "Article/Blog Summary Generator",
    //   //     path: "/blog-article-writer",
    //   //     icon: <FaRegGrinHearts />,
    //   //   },
    //   //   {
    //   //     name: "Paragraph Writer",
    //   //     path: "/paragraph-writer",
    //   //     icon: <FaChartArea />,
    //   //   },
    //   // ],
    // },

    {
      name: "Commerce",
      icon: <FaProductHunt />,
      path: "/commerce",
      // subItems: [
      //   {
      //     name: "Product Description Generator",
      //     path: "/product",
      //     icon: <FaChartPie />,
      //   },
      //   {
      //     name: " Product Name Generator",
      //     path: "/productname",
      //     icon: <FaNutritionix />,
      //   },
      // ],
    },

    {
      name: "Email",
      icon: <MdEmail />,
      path: "/email",
      // subItems: [
      //   {
      //     name: "Email Subject Lines Generator",
      //     path: "/emailsubject",
      //     icon: <AiTwotoneMail />,
      //   },
      //   {
      //     name: "Email Generator",
      //     path: "/emailgenerator",
      //     icon: <MdOutlineAttachEmail />,
      //   },
      // ],
    },

    {
      name: "Landing Page",
      icon: <MdOutlineFlightLand />,
      path: "/landing_page",
      // subItems: [
      //   {
      //     name: "Landing Page Headline Generator",
      //     path: "/landingpage",
      //     icon: <BsFillTabletLandscapeFill />,
      //   },
      //   {
      //     name: "Landing Page Generator",
      //     path: "/land",
      //     icon: <MdOutlineCropLandscape />,
      //   },
      // ],
    },

    {
      name: "Image",
      icon: <FaFileImage />,
      path: "/image",
      // subItems: [
      //   {
      //     name: "Image Generator",
      //     path: "/image",
      //     icon: <FaFileImage />,
      //   },
      // ],
    },

    {
      name: "Translate",
      icon: <MdGTranslate />,
      path: "/translate",
      // subItems: [
      //   {
      //     name: "German",
      //     path: "/german",
      //     icon: <img src={german} alt="" />,
      //   },

      //   {
      //     name: "Russian",
      //     path: "/russian",
      //     icon: <img src={russia} alt="" />,
      //   },

      //   {
      //     name: "Spain",
      //     path: "/spanish",
      //     icon: <img src={spain} alt="" />,
      //   },

      //   {
      //     name: "Portuguese",
      //     path: "/portugish",
      //     icon: <img src={portugal} alt="" />,
      //   },

      //   {
      //     name: "Italian",
      //     path: "/italian",
      //     icon: <img src={italy} alt="" />,
      //   },

      //   {
      //     name: "Japanese",
      //     path: "/japanese",
      //     icon: <img src={japan} alt="" />,
      //   },

      //   {
      //     name: "Chinese",
      //     path: "/chinese",
      //     icon: <img src={china} alt="" />,
      //   },

      //   {
      //     name: "French",
      //     path: "/french",
      //     icon: <img src={france} alt="" />,
      //   },

      //   {
      //     name: "Igbo",
      //     path: "/igbo",
      //     icon: <img src={nigeria} alt="" />,
      //   },

      //   {
      //     name: "Yoruba",
      //     path: "/yoruba",
      //     icon: <img src={nigeria} alt="" />,
      //   },

      //   {
      //     name: "Hausa",
      //     path: "/hausa",
      //     icon: <img src={nigeria} alt="" />,
      //   },
      // ],
    },

    {
      name: "E-Book",
      icon: <img src={ebook} alt="" />,
      path: "/ebook",
      // subItems: [
      //   {
      //     name: "Ebook Generator",
      //     path: "/ebook",
      //     icon: <img src={ebook} alt="" />,
      //   },
      // ],
    },

    // {
    //   name: "Notification",
    //   path: "/notification",
    //   icon: <IoMdNotifications />,
    // },

    // {
    //   name: "Collaboration",
    //   path: "/collaborate",
    //   icon: <FcCollaboration />,
    // },

    // {
    //   name: "log out",
    //   path: "/",
    //   icon: <BiLogOut onClick={handleLogout} />,
    // },
  ];

  return (
    <div style={{ width: "200px" }} className="side-nav">
      <div className="top">
        <img src={logo} alt="Olukowe logo" />
      </div>

      {menuItems.map((item, index) => (
        <div key={index}>
          <NavLink to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div style={{ display: "block" }} className="link-name">
              {item.name}
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default SideNav;

// <div key={index}>
//   {item.subItems ? (
//     <div>
//       <div className="link" onClick={() => handleSubMenuClick(index)}>
//         <div className="icon">{item.icon}</div>
//         <div style={{ display: "block" }} className="link-name">
//           {item.name}
//         </div>
//       </div>
//       {activeMenu === index && (
//         <div className="sub-menu">
//           {item.subItems.map((subItem, subIndex) => (
//             <NavLink
//               to={subItem.path}
//               key={subIndex}
//               className="link sub-link"
//             >
//               <div className="icon">{subItem.icon}</div>
//               <div className="link-name">{subItem.name}</div>
//             </NavLink>
//           ))}
//         </div>
//       )}
//     </div>
//   ) : (
//     <NavLink to={item.path} key={index} className="link">
//       <div className="icon">{item.icon}</div>
//       <div style={{ display: "block" }} className="link-name">
//         {item.name}
//       </div>
//     </NavLink>
//   )}
// </div>
