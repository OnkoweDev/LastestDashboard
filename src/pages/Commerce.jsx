import { FaChartPie, FaNutritionix } from "react-icons/fa";
import { SideNav, TopNav } from "../components";
import Card from "../components/Card";

const Commerce = () => {
  const commerceData = [
    {
      name: "Product Description Generator",
      path: "/product",
      icon: <FaChartPie size={30}/>,
    },
    {
      name: " Product Name Generator",
      path: "/productname",
      icon: <FaNutritionix size={30}/>,
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
                {commerceData.map((i) => (
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

export default Commerce;
