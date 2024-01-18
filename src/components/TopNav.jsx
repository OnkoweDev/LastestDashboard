import React, { useEffect, useState } from "react";
import profile from "../assets/dummyProfile.png";
import { Link } from "react-router-dom";

import "./styles/TopNav.css";

import { BiHomeAlt, BiBell, BiLogOut, BiMenu } from "react-icons/bi";
import { IoIosStats } from "react-icons/io";

import { ProfileRow } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction, logout } from "../actions/userAction";
import { FcCollaboration } from "react-icons/fc";
import MobileMenu from "./MobileMenu";
import { FaRegBell } from "react-icons/fa6";
import Loader from "./Loader";
import { MdPayment } from "react-icons/md";

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
  const [showNotifcations, setShowNotifications] = useState(false);
  const [showCollaboration, setShowCollaboration] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropDown = () => {
    setDropDown(!dropDown);
    setShowNotifications(false);
    setShowCollaboration(false);
  };

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;

  
  const userProfile = useSelector((state) => state.userProfile);
  const { profileInfo, error:profileError } = userProfile;

  const getProfile = useSelector((state) => state.getProfile);
  const { profiles, loading,error:getProfileError } = getProfile;


  const handleLogout = () => {
    dispatch(logout());
  };

  const toggleViewNotification = () => {
    setShowNotifications(!showNotifcations);
    setDropDown(false);
  };

  const toggleViewCollaboration = () => {
    setShowCollaboration(!showCollaboration);
    setDropDown(false);
  };

  useEffect(() => {

    dispatch(getProfileAction())

  }, [userInfo,profileInfo]);

  return (
    <div className="mycontainer">
      <nav className="top-nav">
        <div className="inner-container w-full flex">
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

                <aside
                  style={{ marginLeft: "70px" }}
                  className="profile__details"
                >

                <div className="top-profile">
                  <div className="top-img">
                     <img src={profile} alt="" style={{marginLeft:"10px" }} />
                  </div>
                
                    <div className="item-name" style={{marginRight:'5px'}}>
                      {loading && <Loader style={{width:'40px',height:'40px'}} />}
                      {profiles?.profile && profiles?.profile.map((pro)=>(
                      <>
                        {/*<h3>{pro.first_name}</h3>
                      <h4>{pro.last_name}</h4>*/}
                        <p>{`${pro.first_name} ${pro.last_name}`}</p>
                       {/*<small>{pro.phone_number} </small>*/}
                      </>
                      ))}
                      <small>{userInfo?.email}</small>
                    </div>
                  </div>
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
                  onClick={toggleViewNotification}
                  text={"Something new"}
                />

                <ProfileRow
                  Icon={IoIosStats}
                  title={"Usage"}
                  link="/usage"
                  text={"Monitor your usage"}
                />

                <ProfileRow
                  Icon={MdPayment}
                  title={"Billing and plan"}
                  link="/payment"
                  text={"Select the plan that best suit you"}
                  
                />

                <ProfileRow
                  Icon={FcCollaboration}
                  title={"Collaboration"}
                  //link="/collaborate"
                  onClick={toggleViewCollaboration}
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
                      <p className="logout-text">Log out</p>
                    </div>
                  </Link>
                }
              </section>
            </div>
          </div>
        )}

        {showNotifcations && (
          <div className="drop-content-2">
            <div className={`bg-zinc-50 h-auto w-80 p-5 rounded-md`}>
              <p className="font-bold py-4 flex items-center gap-x-2">
                <FaRegBell /> Notifications
              </p>
              <div className="bg-slate-50 hover:bg-[#85b5f7] my-2 hover:text-white transition-all duration-150 cursor-pointer p-3 rounded">
                No any Notification
              </div>
            </div>
          </div>
        )}

        {showCollaboration && (
          <div className="drop-content-2">
            <div className={`bg-zinc-50 h-auto w-80 p-5 rounded-md`}>
              <p className="font-bold py-4 flex items-center gap-x-2">
                <FcCollaboration /> Collaboration
              </p>
              <div className="bg-slate-50 hover:bg-[#85b5f7] my-2 hover:text-white transition-all duration-150 cursor-pointer p-3 rounded">
               Comming Soon
              </div>
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
