import { Link } from "react-router-dom";
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

const SocialMedia = () => {
  const socialMediaItems = [
    {
      name: "Short LinkedIn Posts",
      path: "/short-LinkedIn-posts",
      icon: <TiSocialLinkedinCircular />,
    },
    {
      name: "Tweets Generator",
      path: "/tweets-generation",
      icon: <TiSocialTwitter />,
    },
    {
      name: "Youtube Intro Generator",
      path: "/youtube-intro-generator",
      icon: <TiSocialYoutube />,
    },
    {
      name: "Youtube Description Generator",
      path: "/youtube-generator",
      icon: <TiSocialYoutubeCircular />,
    },
    {
      name: "Google Ad Description Generator",
      path: "/googleads",
      icon: <SlSocialGoogle />,
    },
    {
      name: "LinkedIn Ad Description Generator",
      path: "/linkdlnads",
      icon: <TiSocialLinkedin />,
    },
    {
      name: "Google Ad Title Generator",
      path: "/googletitle",
      icon: <BiHelpCircle />,
    },
    {
      name: "Instagram Captions Generator",
      path: "/instagram",
      icon: <SlSocialGoogle />,
    },
    {
      name: "Facebook Ad Generator",
      path: "/facebook",
      icon: <TiSocialFacebook />,
    },
  ];
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
