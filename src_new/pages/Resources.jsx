import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Resources.css";

const Resources = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">Resources</div>
        </div>
      </main>
    </>
  );
};

export default Resources;
