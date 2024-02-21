import { Link, useNavigate } from "react-router-dom";
import { SideNav, TopNav } from "../components";
import Card from "../components/Card";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialLinkedinCircular,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialYoutubeCircular,
} from "react-icons/ti";
import { BiHelpCircle } from "react-icons/bi";
import { SlSocialGoogle } from "react-icons/sl";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const SocialMedia = () => {
  const socialMediaItems = [
    {
      name: "Short LinkedIn Posts",
      path: "/short-LinkedIn-posts",
      icon: <TiSocialLinkedinCircular size={30} />,
    },
    {
      name: "Tweets Generator",
      path: "/tweets-generation",
      icon: <TiSocialTwitter size={30} />,
    },
    {
      name: "Youtube Intro Generator",
      path: "/youtube-intro-generator",
      icon: <TiSocialYoutube size={30} />,
    },
    {
      name: "Youtube Description Generator",
      path: "/youtube-generator",
      icon: <TiSocialYoutubeCircular size={30} />,
    },
    {
      name: "Google Ad Description Generator",
      path: "/googleads",
      icon: <SlSocialGoogle size={30} />,
    },
    {
      name: "LinkedIn Ad Description Generator",
      path: "/linkdlnads",
      icon: <TiSocialLinkedin  size={30}/>,
    },

    {
      name: "Short Linkdln Posts",
      path: "/short-LinkedIn-posts",
      icon: <TiSocialLinkedin size={30} />,
    },
    {
      name: "Google Ad Title Generator",
      path: "/googletitle",
      icon: <SlSocialGoogle size={30} />,
    },
    {
      name: "Instagram Captions Generator",
      path: "/instagram",
      icon: <SlSocialGoogle size={30} />,
    },
    {
      name: "Facebook Ad Generator",
      path: "/facebook",
      icon: <TiSocialFacebook size={30} />,
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
                {socialMediaItems.map((i) => (
                  <Card path={i.path} icon={i.icon} text={i.name} isIcon={true} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SocialMedia;
