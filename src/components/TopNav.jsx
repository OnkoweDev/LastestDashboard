import React, { useEffect, useState } from "react";
import profile from "../assets/dummyProfile.png";
import { Link } from "react-router-dom";

import "./styles/TopNav.css";

import { BiHomeAlt, BiBell, BiLogOut, BiMenu } from "react-icons/bi";

import { ProfileRow } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";
import { FcCollaboration } from "react-icons/fc";
import MobileMenu from "./MobileMenu";

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
  const [dropDown, setDropDown] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;

  const userProfile = useSelector((state) => state.userProfile);
  const { profileInfo, error:profileError } = userLogin;

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {}, [userInfo]);

  return (
    <div className="mycontainer">
      <nav className="top-nav">
        <div className="inner-container">
          <div className="hambuger" onClick={handleMenuToggle}>
            <BiMenu className="icon" />
          </div>
          {/*profile dropdown  */}

          <div className="image" onClick={toggleDropDown}>
            <img src={profile} alt="" style={{ width: "100%" }} />
          </div>
        </div>

        {/* dropdown */}
        {dropDown && (
          <div className="drop-content">
            <div className="dropdown-link dropdown-btn-link">
              <section className="top">
                <aside className="profile__img">
                  <img src={profile} alt="" />
                </aside>
                <aside style={{marginLeft:'70px'}} className="profile__details">
                  <h3>{profileInfo?.first_name}</h3>
                  <small>{profileInfo?.first_name}</small>
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

                <ProfileRow
                  Icon={BiHomeAlt}
                  title={"Password"}
                  link="/password"
                  text={"Change password"}
                />
                {
                  <Link to="/" onClick={handleLogout}>
                    <div className="logout-con">
                      <BiLogOut className="logout-icon" />
                      <p className="logout-text">Logo out</p>
                    </div>
                  </Link>
                }
              </section>
            </div>
          </div>
        )}

        {/* mobile menu */}
        <MobileMenu showMenu={showMenu} />
      </nav>
    </div>
  );
};

export default TopNav;
