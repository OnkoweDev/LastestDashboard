import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Upload.css";

const Upload = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">Upload</div>
        </div>
      </main>
    </>
  );
};

export default Upload;
