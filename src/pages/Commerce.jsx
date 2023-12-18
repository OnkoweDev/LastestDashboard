import { SideNav, TopNav } from "../components";

const Commerce = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">
            <div className="google-ad inner-page-container">Commerce</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Commerce;
