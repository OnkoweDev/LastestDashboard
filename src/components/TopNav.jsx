import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import profile from "../assets/dummyProfile.png";
import { useDispatch, useSelector } from "react-redux";
import MobileMenu from "./MobileMenu";
import { logout } from "../actions/userAction";
import { BiMenu } from "react-icons/bi";

const TopNav = () => {
  const [isCartDropdownVisible, setIsNotificationDropdownVisible] =
    useState(false);
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] =
    useState(false);

  const notificationRef = useRef(null);
  const profileRef = useRef(null);
  const router = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;

  const userProfile = useSelector((state) => state.userProfile);
  const { profileInfo, error: profileError } = userLogin;

  const handleLogout = () => {
    dispatch(logout());
    router("/");
  };

  useEffect(() => {
    const closeDropdowns = (event) => {
      if (
        isCartDropdownVisible &&
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsNotificationDropdownVisible(false);
      }
    };

    window.addEventListener("click", closeDropdowns);

    return () => {
      window.removeEventListener("click", closeDropdowns);
    };
  }, [isCartDropdownVisible]);

  useEffect(() => {
    const closeDropdowns = (event) => {
      if (
        isProfileDropdownVisible &&
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setIsProfileDropdownVisible(false);
      }
    };

    window.addEventListener("click", closeDropdowns);

    return () => {
      window.removeEventListener("click", closeDropdowns);
    };
  }, [isProfileDropdownVisible]);

  const toggleCartDropdown = () => {
    setIsNotificationDropdownVisible(!isCartDropdownVisible);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownVisible(!isProfileDropdownVisible);
  };

  const notificatonItems = [
    {
      id: 1,
      text: "The campaign [13] test has been saved as draft.",
      onClick: () => {
        console.log(`Hello notification`);
      },
    },
    {
      id: 2,
      text: "A process has been completed to delete contacts permanently.",
      onClick: () => {
        console.log(`Hello notification`);
      },
    },
    {
      id: 3,
      text: "A process has been queued to delete contacts permanently.",
      onClick: () => {
        console.log(`Hello notification`);
      },
    },
  ];

  const profileMenuItems = [
    {
      id: 1,
      text: "personal information",
      onClick: () => {
        router("/profile");
      },
    },

    {
      id: 2,
      text: "collaboration",
      onClick: () => {
        router("/collaborate");
      },
    },
    {
      id: 3,
      text: "change password",
      onClick: () => {
        router("/password");
      },
    },

    {
      id: 4,
      text: "Logout",
      onClick: async () => {
        handleLogout();
      },
    },
  ];

  const routeBack = () => {
    router.back();
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div
        className={`flex items-center bg-[#EBF3FF] ${
          true ? "justify-between" : "justify-end"
        } p-4`}
      >
        <div className="" onClick={handleMenuToggle}>
          <BiMenu className="w-8 h-8" />
        </div>

        <section className="user-profile flex items-center gap-x-4">
          <section
            className="notification cursor-pointer relative"
            ref={notificationRef}
          >
            <GoBell
              className="h-6 w-6 transition-colors hover:text-accent cursor-pointer"
              onClick={toggleCartDropdown}
            />

            {isCartDropdownVisible && (
              <div className="notification-dropdown absolute  top-full w-72 right-0 bg-white z-[100] rounded-md shadow-md p-4">
                <h4 className="mb-2 font-bold text-gray-800 capitalize flex items-center gap-x-2">
                  Notifications{" "}
                  <GoBell NotificationBell className="inline-block ml-2" />
                </h4>
                <hr />
                {notificatonItems.map((item) => (
                  <p
                    key={item.id}
                    className="text-sm bg-slate-50 hover:bg-[#85b5f7] my-2 hover:text-white transition-all duration-150 cursor-pointer p-3 rounded"
                    onClick={() => item.onClick()}
                  >
                    {item.text}
                  </p>
                ))}
                <hr />
                <section>
                  <p className="text-sm text-center my-2 text-[#559fff] font-bold">
                    View all activity
                  </p>
                </section>
              </div>
            )}
          </section>

          <div className="avatar cursor-pointer relative" ref={profileRef}>
            <div className="w-10 rounded-full" onClick={toggleProfileDropdown}>
              <img className="" src={profile} alt="user profile image" />
            </div>

            {isProfileDropdownVisible && (
              <div className="profile-dropdown absolute  top-full w-60 h-70 right-0 bg-white z-[100] rounded-md shadow-md p-4">
                <h4 className="mb-2 font-bold text-gray-800 capitalize">
                  Menu
                </h4>
                {profileMenuItems.map((item) => (
                  <p
                    key={item.id}
                    className="bg-slate-50 hover:bg-[#85b5f7] my-2 hover:text-white transition-all duration-150 cursor-pointer p-3 rounded capitalize text-[15px]"
                    onClick={() => item.onClick()}
                  >
                    {item.text}
                  </p>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
      <section className="p-3">
        <MobileMenu showMenu={showMenu} />
      </section>
    </>
  );
};

export default TopNav;
