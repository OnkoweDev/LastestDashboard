import React, { useState } from "react";
import "./styles/SideNav.css";
import logo from "./../assets/logo.png";

import { BiHomeAlt } from "react-icons/bi";

import { GiSoundWaves, GiWhiteBook } from "react-icons/gi";
import { MdEmail, MdGTranslate, MdOutlineFlightLand, MdOutlineHelp, MdPayment } from "react-icons/md";
import { TiSocialDribbble } from "react-icons/ti";
import { FaBloggerB, FaProductHunt, FaFileImage } from "react-icons/fa";
import { GoProject } from "react-icons/go";

import { NavLink } from "react-router-dom";
import { logout } from "../actions/userAction";

import ebook from "../assets/ebookIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { RiVoiceprintFill } from "react-icons/ri";

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
      icon: <BiHomeAlt size={20}/>,
      path: "/home",
    },

    {
      name: "Transcribe",
      icon: <RiVoiceprintFill size={20}/>,
      path: "/audio",
    },
  
    {
      name: "Social media",
      icon: <TiSocialDribbble size={20}/>,
      path: "/social_media",
    },

    {
      name: "Blog & Article",
      icon: <FaBloggerB size={20}/>,
      path: "/blog-and-articles",
    },

    {
      name: "E-Commerce",
      icon: <FaProductHunt size={20}/>,
      path: "/commerce",
    },

    {
      name: "Email",
      icon: <MdEmail size={20}/>,
      path: "/email",
    },

    {
      name: "Landing Page",
      icon: <MdOutlineFlightLand size={20}/>,
      path: "/landing_page",
    },

    {
      name: "Image",
      icon: <FaFileImage size={20}/>,
      path: "/image",
    },

    {
      name: "Translate",
      icon: <MdGTranslate size={20}/>,
      path: "/language-translation",
    },

    {
      name: "E-Book",
      icon: <GiWhiteBook size={20}/>,
      path: "/ebook",
    },

    {
      name: "Help",
      icon: <MdOutlineHelp size={20}/>,
      path: "/help",
    },

    {
      name: "Upgrade",
      icon: <MdPayment  size={20}/>,
      path: "/payment",
    },

  ];

  return (
    <div style={{ width: "200px" }} className="side-nav">
      <div className="top m-8 mb-8">
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
