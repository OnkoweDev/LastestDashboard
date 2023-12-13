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
import { MdEmail, MdGTranslate, MdOutlineCropLandscape, MdOutlineFlightLand, MdOutlineSettingsSuggest } from "react-icons/md";
import { TiSocialDribbble, TiSocialFacebook, TiSocialLinkedin, TiSocialLinkedinCircular,TiSocialTwitter, TiSocialYoutube, TiSocialYoutubeCircular } from "react-icons/ti";
import { SlSocialGoogle } from "react-icons/sl";
import { FaBloggerB, FaChartArea, FaChartBar, FaChartPie, FaProjectDiagram, FaRegGrinHearts,FaProductHunt, FaPumpSoap, FaNutritionix, FaFileImage } from "react-icons/fa";
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
import blog1 from "../assets/article.png";
import blog3 from "../assets/blog-writer.png";
import blog2 from "../assets/blog-section.png";
import content from "../assets/content.png";
import articleBlog from "../assets/article-blog.png";
import paragraph from "../assets/paragraph.png";
import tweet from "../assets/tweet.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import product from "../assets/product.png";
import youtube from "../assets/youtube.png";
import { useDispatch, useSelector } from "react-redux";


const SideNav = () => {
  const refresh = () => window.location.reload(true)
  const dispatch = useDispatch()

  const [isopen,setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null);

  const toggle = () => setIsOpen(!isopen)

  const handleSubMenuClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const handleLogout = () => {
    dispatch(logout())
}


  
  const menuItems = [
    {
      name: 'Home',
      icon: <BiHomeAlt />,
      path:'/'
    },
    {
      name: 'Transcribe',
      icon: <GiSoundWaves />,
      path:'/audio'
    },

    {
      name: 'Project',
      icon: <GoProject />,
      path:'/all_project'
    },
    {
      name: 'Socia media',
      icon: <TiSocialDribbble />,
      subItems: [
        {
          name: 'Short LinkedIn Posts',
          path: '/short-LinkedIn-posts',
          icon: <TiSocialLinkedinCircular />,
        },
        {
          name: 'Tweets Generator',
          path: '/tweets-generation',
          icon: <TiSocialTwitter />,
        },

        {
          name: 'Youtube Intro Generator',
          path: '/youtube-intro-generator',
          icon: <TiSocialYoutube />,
        },

        {
          name: 'Youtube Description Generator',
          path: '/youtube-generator',
          icon: <TiSocialYoutubeCircular />,
        },

        {
          name: 'Google Ad Description Generator',
          path: '/googleads',
          icon: <SlSocialGoogle />,
        },

        {
          name: 'LinkedIn Ad Description Generator',
          path: '/linkdlnads',
          icon: <TiSocialLinkedin />,
        },

        {
          name: 'Google Ad Title Generator',
          path: '/googletitle',
          icon: <BiHelpCircle />,
        },

        {
          name: 'Instagram Captions Generator',
          path: '/instagram',
          icon: <SlSocialGoogle />,
        },
        {
          name: 'Facebook Ad Generator',
          path: '/facebook',
          icon: <TiSocialFacebook />,
        }
      ]
    },

    {
      name: 'Blog',
      icon: <FaBloggerB />,
      subItems: [
        
        {
          name: 'Blog Topic Generator',
          path: '/blogtopic',
          icon: <FaBloggerB />,
        },
        {
          name: ' Blog Intro Generator',
          path: '/blog-intro-generator',
          icon: <FaBloggerB />,
        },

        {
          name: ' Blog Section Generator',
          path: '/blog-section-generator',
          icon: <FaBloggerB />,
        },
        {
          name: 'Blog Article Writer',
          path: '/blog-article-writer',
          icon: <FaBloggerB />,
        }
      ]
    },

    {
      name: 'Article',
      icon: <FaArtstation />,
      subItems: [
        
        {
          name: ' Content Rephraser',
          path: '/content-rephraser',
          icon: <FaChartPie  />,
        },
        {
          name: ' Article/Blog Conclusion Generator',
          path: '/article-blog-conclusion',
          icon: <FaArtstation />,
        },

        {
          name: ' Article Rewriter',
          path: '/articleRewriter',
          icon: <FaChartBar />,
        },
        {
          name: 'Article/Blog Summary Generator',
          path: '/blog-article-writer',
          icon: <FaRegGrinHearts />,
        },
        {
          name: 'Paragraph Writer',
          path: '/paragraph-writer',
          icon: <FaChartArea />,
        }
      ]
    },

    {
      name: 'Product',
      icon: <FaProductHunt />,
      subItems: [
        
        {
          name: 'Product Description Generator',
          path: '/product',
          icon: <FaChartPie />,
        },
        {
          name: ' Product Name Generator',
          path: '/productname',
          icon: <FaNutritionix />,
        },
      ]
    },

    {
      name: 'Email',
      icon: <MdEmail />,
      subItems: [
        
        {
          name: 'Email Subject Lines Generator',
          path: '/emailsubject',
          icon: <AiTwotoneMail />,
        },
        {
          name: 'Email Generator',
          path: '/emailgenerator',
          icon: <MdOutlineAttachEmail />,
        },
      ]
    },

    {
      name: 'Landing Page',
      icon: <MdOutlineFlightLand />,
      subItems: [
        
        {
          name: 'Landing Page Headline Generator',
          path: '/landingpage',
          icon: <BsFillTabletLandscapeFill />,
        },
        {
          name: 'Landing Page Generator',
          path: '/land',
          icon: <MdOutlineCropLandscape />,
        },
      ]
    },

    {
      name: 'Image',
      icon: <FaFileImage />,
      subItems: [
        
        {
          name: 'Image Generator',
          path: '/image',
          icon: <FaFileImage />,
        },
      ]
    },

    {
      name: 'Translate',
      icon: <MdGTranslate />,
      subItems: [
        
        {
          name: 'German',
          path: '/german',
          icon: <img src={german} alt="" />,
        },

        {
          name: 'Russian',
          path: '/russian',
          icon: <img src={russia} alt="" />,
        },

        {
          name: 'Spain',
          path: '/spanish',
          icon: <img src={spain} alt="" />,
        },

        {
          name: 'Portuguese',
          path: '/portugish',
          icon: <img src={portugal} alt="" />,
        },

        {
          name: 'Italian',
          path: '/italian',
          icon: <img src={italy} alt="" />,
        },

        {
          name: 'Japanese',
          path: '/japanese',
          icon: <img src={japan} alt="" />,
        },

        {
          name: 'Chinese',
          path: '/chinese',
          icon: <img src={china} alt="" />,
        },

        {
          name: 'French',
          path: '/french',
          icon: <img src={france} alt="" />,
        },

        {
          name: 'Igbo',
          path: '/igbo',
          icon: <img src={nigeria} alt="" />,
        },

        {
          name: 'Yoruba',
          path: '/yoruba',
          icon: <img src={nigeria} alt="" />,
        },

        {
          name: 'Hausa',
          path: '/hausa',
          icon: <img src={nigeria} alt="" />,
        },
      ]
    },

    {
      name: 'E-Book',
      icon: <img src={ebook} alt="" />,
      subItems: [
        
        {
          name: 'Ebook Generator',
          path: '/ebook',
          icon: <img src={ebook} alt="" />,
        },
      ]
    },

    {
      name: 'Notification',
      path:'/notification',
      icon: <IoMdNotifications />

    },

    {
      name: 'Collaboration',
      path:'/collaborate',
      icon: <FcCollaboration />

    },


    {
      name: 'log out',
      path:'/',
      icon: <BiLogOut onClick={handleLogout} />

    },
    
    // ... (other items)
  ];

  return (
    <div style={{width:isopen ?'200px': '80px'}} className="side-nav">
      <div className="top">
        <img src={logo} alt="" style={{ width: "100%" }} />
        {/*<h2 style={{display:isopen ? 'block': 'none'}}>OLUKOWE</h2>*/}
        <div style={{marginLeft:isopen ? '10px': '0px'}} className="bars"><FaBars onClick={toggle} /></div>
      </div>
    {  /*<SidebarRow Icon={BiCloudUpload} title={"Upload"} link='/upload' />
  <SidebarRow Icon={BiFont} title={"Font"} link='/font' />*/}
     { /*<SidebarRow Icon={BiFile} title={"Resources"} link='/resources' />*/}
      {/* <SidebarRow Icon={GiSoundWaves} title={"Transcribe"} link='/audio' />
      // <SidebarRow Icon={BiHelpCircle} title={"Help"} link='/help' />
      // <SidebarRow Icon={MdOutlineSettingsSuggest} title={"Suggest Feature"} link='/suggest' />
     <SidebarRow Icon={GrNotification} title={"Notification"} link='/notification' />*/}
      
    

    {menuItems.map((item, index) => (
      <div key={index}>
        {item.subItems ? (
          <div>
            <div className='link' onClick={() => handleSubMenuClick(index)}>
              <div className='icon'>{item.icon}</div>
              <div style={{display:isopen ? 'block': 'none'}} className='link-name'>{item.name}</div>
            </div>
            {activeMenu === index && (
              <div className='sub-menu'>
                {item.subItems.map((subItem, subIndex) => (
                  <NavLink to={subItem.path} key={subIndex} className='link sub-link'>
                    <div className='icon'>{subItem.icon}</div>
                    <div  className='link-name'>{subItem.name}</div>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ) : (
          <NavLink to={item.path} key={index} className='link'>
            <div className='icon'>{item.icon}</div>
            <div style={{display:isopen ? 'block': 'none'}} className='link-name'>{item.name}</div>
          </NavLink>
        )}
      </div>
    ))}
          
    </div>
  );
};

export default SideNav;
