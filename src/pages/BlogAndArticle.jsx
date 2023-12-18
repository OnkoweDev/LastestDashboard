import { SideNav, TopNav } from "../components";

const BlogAndArticle = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">
            <div className="google-ad inner-page-container">BlogAndArticle</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogAndArticle;
