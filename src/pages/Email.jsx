import React, { useEffect } from "react";
import { SideNav, TopNav } from "../components";
import Card from "../components/Card";
import { AiTwotoneMail } from "react-icons/ai";
import { MdOutlineAttachEmail } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Email = () => {
  const emailPageData = [
    {
      name: "Email Generator",
      path: "/emailgenerator",
      icon: <MdOutlineAttachEmail size={30}/>,
    },
    {
      name: "Email Subject Lines Generator",
      path: "/emailsubject",
      icon: <AiTwotoneMail size={30}/>,
    },
  ];
  const userInfo = useSelector((state) => state.userLogin.userInfo);
  const navigate = useNavigate()

  useEffect(()=>{
    if (!userInfo) {
      navigate('/')
    }
  },[])
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">
            <div className="google-ad inner-page-container">
              <div className="cards-container">
                {emailPageData.map((i) => (
                  <Card
                    path={i.path}
                    icon={i.icon}
                    text={i.name}
                    isIcon={true}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Email;
