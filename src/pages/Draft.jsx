import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Draft.css";

const Draft = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">Draft</div>
        </div>
      </main>
    </>
  );
};

export default Draft;
