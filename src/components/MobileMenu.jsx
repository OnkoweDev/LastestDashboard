import { BiHomeAlt } from "react-icons/bi";
import { FaBloggerB, FaFileImage, FaProductHunt } from "react-icons/fa";
import { GiSoundWaves } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import { MdEmail, MdGTranslate, MdOutlineFlightLand } from "react-icons/md";
import { TiSocialDribbble } from "react-icons/ti";
import { NavLink } from "react-router-dom";

import ebook from "../assets/ebookIcon.png";

import "./styles/mobileMenu.css";

const MobileMenu = ({ showMenu }) => {
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
    },

    {
      name: "Blog & Article",
      icon: <FaBloggerB />,
      path: "/blog-and-articles",
    },

    {
      name: "Commerce",
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
      path: "/translate",
    },

    {
      name: "E-Book",
      icon: <img src={ebook} alt="" />,
      path: "/ebook",
    },
  ];
  return (
    <div>
      {showMenu && (
        <div className="mobile_menu-wrapper">
          {menuItems.map((item, index) => (
            <div key={index}>
              <NavLink to={item.path} key={index} className="link">
                <div className="icon">{item.icon}</div>
                <div className="link-name">
                  {item.name}
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
