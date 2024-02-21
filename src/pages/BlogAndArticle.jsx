import {
  FaArtstation,
  FaBloggerB,
  FaChartArea,
  FaChartBar,
  FaChartPie,
  FaRegGrinHearts,
} from "react-icons/fa";
import { SideNav, TopNav } from "../components";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const BlogAndArticle = () => {
  const blogAndArticleConstants = [
    {
      name: "Blog Topic Generator",
      path: "/blogtopic",
      icon: <FaBloggerB size={30}/>,
    },
    {
      name: " Blog Intro Generator",
      path: "/blog-intro-generator",
      icon: <FaRegGrinHearts size={30}/>,
    },
    {
      name: " Blog Section Generator",
      path: "/blog-section-generator",
      icon: <FaBloggerB size={30}/>,
    },
    {
      name: "Blog Article Writer",
      path: "/blog-article-writer",
      icon: <FaBloggerB size={30}/>,
    },
    {
      name: " Content Rephraser",
      path: "/content-rephraser",
      icon: <FaChartPie size={30}/>,
    },
    {
      name: " Article/Blog Conclusion Generator",
      path: "/article-blog-conclusion",
      icon: <FaArtstation size={30}/>,
    },

    {
      name: " Article Rewriter",
      path: "/articleRewriter",
      icon: <FaChartBar size={30}/>,
    },
    {
      name: "Paragraph Writer",
      path: "/paragraph-writer",
      icon: <FaChartArea size={30}/>,
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
                {blogAndArticleConstants.map((i) => (
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

export default BlogAndArticle;
