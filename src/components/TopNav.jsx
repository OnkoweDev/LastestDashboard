import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import logo from "../assets/Logo.png";
import profile from "../assets/dummyProfile.png";
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
import { Link, NavLink } from "react-router-dom";

import german from "../assets/german.png";
import france from "../assets/france.png";
import italy from "../assets/italy.png";
import japan from "../assets/japan.png";
import portugal from "../assets/portugal.png";
import russia from "../assets/russia.png";
import spain from "../assets/spain.png";
import nigeria from "../assets/nigeria.png";
import china from "../assets/china.png";

import "./styles/TopNav.css";

import { BiHomeAlt, BiBell, BiLogOut } from "react-icons/bi";

import { ProfileRow } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";
import { FcCollaboration } from "react-icons/fc";

const NewProjectLinks = ({ link, displayImage, text }) => {
  return (
    <Link
      to={link}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
      className="dropdown-link dropdown-btn-link"
    >
      <div className="img">
        <img
          src={displayImage}
          alt=""
          style={{ width: "20px", height: "20px" }}
        />
      </div>
      <p
        style={{
          fontWeight: "400",
          fontSize: "13px",
          lineHeight: "19px",
          letterSpacing: "0.5px",
          color: "rgba(0, 22, 51, 1)",
          textTransform: "capitalize",
        }}
      >
        {text}
      </p>
    </Link>
  );
};

const TopNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
    const dispatch = useDispatch()
    const userLogin = useSelector((state)=>state.userLogin)
    const {userInfo,error} = userLogin


    const handleLogout = () => {
        dispatch(logout())
    }
    
    
    useEffect(() => {
        
    }, [userInfo])
  return (
    <div className="mycontainer">
    
    <nav className="top-nav">
      <div className="inner-container">
        <div className="logo">
          <img src={logo} alt="" style={{ width: "100%" }} />
        </div>
        <div className="nav">
          <ul>
                          
          </ul>
        </div>
        {/*  */}
        <div className="profile drop-btn">
          <img src={profile} alt="" style={{ width: "100%" }} />
          <div className="drop-content">
            <div className="dropdown-link dropdown-btn-link">
              <section className="top">
                <aside className="profile__img">
                  <img src={profile} alt="" />
                </aside>
                <aside className="profile__details">
                  <h3>username</h3>
                  <small>email</small>
                </aside>
              </section>
              <hr style={{ margin: "25px 0" }} />
              <section className="botttom">
                <ProfileRow
                  Icon={BiHomeAlt}
                  title={"Profile"}
                  link="/profile"
                  text={"Personal information"}
                />
                <ProfileRow
                  Icon={BiBell}
                  title={"Notifications"}
                  link="/notification"
                  text={"Something new"}
                />

                <ProfileRow
                Icon={FcCollaboration}
                title={"Collaboration"}
                link="/notification"
                text={"Something new"}
              />
                {/*<ProfileRow
                  Icon={BiHomeAlt}
                  title={"Prefrences"}
                  link="/preference"
                  text={"Manage your prefrences"}
              />*/}
                <ProfileRow
                  Icon={BiHomeAlt}
                  title={"Password"}
                  link="/password"
                  text={"Change password"}
                />
                {<Link  to='/' onClick={handleLogout} >
                  <div className="logout-con">
                    <BiLogOut className="logout-icon" /> 
                    <p className="logout-text">Logo out</p>
                  </div>
                </Link>}
                  { /*<ProfileRow  onClick={handleLogout} Icon={BiLogOut} title={"Log Out"} link='/' /> */}

              </section>
            </div>
          </div>
        </div>
      </div>

    
      
    </nav>
    </div>
  );
};

export default TopNav;
