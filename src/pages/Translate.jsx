import { SideNav, TopNav } from "../components";
import Card from "../components/Card";

import german from "../assets/german.png";
import france from "../assets/france.png";
import italy from "../assets/italy.png";
import japan from "../assets/japan.png";
import portugal from "../assets/portugal.png";
import russia from "../assets/russia.png";
import spain from "../assets/spain.png";
import nigeria from "../assets/nigeria.png";
import china from "../assets/china.png";

const Translate = () => {
  const translatePageData = [
    {
      name: "German",
      path: "/german",
      img: german,
    },

    {
      name: "Russian",
      path: "/russian",
      img: russia,
    },

    {
      name: "Spain",
      path: "/spanish",
      img: <img src={spain} alt="" />,
    },

    {
      name: "Portuguese",
      path: "/portugish",
      img: portugal,
    },

    {
      name: "Italian",
      path: "/italian",
      img: italy,
    },

    {
      name: "Japanese",
      path: "/japanese",
      img: japan,
    },

    {
      name: "Chinese",
      path: "/chinese",
      img: china,
    },

    {
      name: "French",
      path: "/french",
      img: france,
    },

    {
      name: "Igbo",
      path: "/igbo",
      img: nigeria,
    },

    {
      name: "Yoruba",
      path: "/yoruba",
      img: nigeria,
    },

    {
      name: "Hausa",
      path: "/hausa",
      img: nigeria,
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
                {translatePageData.map((i) => (
                  <Card
                    path={i.path}
                    icon={i.icon}
                    text={i.name}
                    isIcon={false}
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

export default Translate;
