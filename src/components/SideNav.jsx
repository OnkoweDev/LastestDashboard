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
      icon: <BiHomeAlt />,
      path: "/dashboard",
    },

    {
      name: "Transcibe",
      icon: <RiVoiceprintFill />,
      path: "/audio",
    },
  
    {
      name: "Social media",
      icon: <TiSocialDribbble />,
      path: "/social_media",
    },

    {
      name: "Blog & Article",
      icon: <FaBloggerB />,
      path: "/blog-and-articles",
    },

    {
      name: "E-Commerce",
      icon: <FaProductHunt />,
      path: "/commerce",
    },

    {
      name: "Email",
      icon: <MdEmail />,
      path: "/email",
    },

    {
      name: "Landing Page",
      icon: <MdOutlineFlightLand />,
      path: "/landing_page",
    },

    {
      name: "Image",
      icon: <FaFileImage />,
      path: "/image",
    },

    {
      name: "Translate",
      icon: <MdGTranslate />,
      path: "/language-translation",
    },

    {
      name: "E-Book",
      icon: <GiWhiteBook />,
      path: "/ebook",
    },

    {
      name: "Help",
      icon: <MdOutlineHelp />,
      path: "/help",
    },

    {
      name: "Upgrade",
      icon: <MdPayment />,
      path: "/payment",
    },

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
