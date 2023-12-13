import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Transcribe.css";

const Transcribe = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">Transcribe</div>
        </div>
      </main>
    </>
  );
};

export default Transcribe;
