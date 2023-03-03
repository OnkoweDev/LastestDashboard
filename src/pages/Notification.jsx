import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Notification.css";

const Notification = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">Notification</div>
        </div>
      </main>
    </>
  );
};

export default Notification;
