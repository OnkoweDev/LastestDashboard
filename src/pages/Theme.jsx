import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Theme.css";

const Theme = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">Theme</div>
        </div>
      </main>
    </>
  );
};

export default Theme;
