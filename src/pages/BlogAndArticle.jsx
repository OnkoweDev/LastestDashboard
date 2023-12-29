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

const BlogAndArticle = () => {
  const blogAndArticleConstants = [
    {
      name: "Blog Topic Generator",
      path: "/blogtopic",
      icon: <FaBloggerB />,
    },
    {
      name: " Blog Intro Generator",
      path: "/blog-intro-generator",
      icon: <FaRegGrinHearts />,
    },
    {
      name: " Blog Section Generator",
      path: "/blog-section-generator",
      icon: <FaBloggerB />,
    },
    {
      name: "Blog Article Writer",
      path: "/blog-article-writer",
      icon: <FaBloggerB />,
    },
    {
      name: " Content Rephraser",
      path: "/content-rephraser",
      icon: <FaChartPie />,
    },
    {
      name: " Article/Blog Conclusion Generator",
      path: "/article-blog-conclusion",
      icon: <FaArtstation />,
    },

    {
      name: " Article Rewriter",
      path: "/articleRewriter",
      icon: <FaChartBar />,
    },
    {
      name: "Paragraph Writer",
      path: "/paragraph-writer",
      icon: <FaChartArea />,
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
