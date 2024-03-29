import { BsFillTabletLandscapeFill } from "react-icons/bs";
import { SideNav, TopNav } from "../components";
import { MdOutlineCropLandscape } from "react-icons/md";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LandingP = () => {
  const landingPageData = [
    {
      name: "Landing Page Headline Generator",
      path: "/landingpage",
      icon: <BsFillTabletLandscapeFill size={30}/>,
    },
    {
      name: "Landing Page Generator",
      path: "/land",
      icon: <MdOutlineCropLandscape size={30}/>,
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
                {landingPageData.map((i) => (
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

export default LandingP;
