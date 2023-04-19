import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Font.css";

const Font = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">Font</div>
        </div>
      </main>
    </>
  );
};

export default Font;
