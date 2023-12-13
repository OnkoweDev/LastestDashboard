import React from "react";
import { Link } from "react-router-dom";
import "./styles/ProfileRow.css";

const ProfileRow = ({ Icon, title, link, text }) => {
  return (
    <Link to={link} className="profile__row" style={{ color: "var(--black)" }}>
      <Icon className="icon" />
      <div className="side">
        <p>{title}</p>
        <small>{text}</small>
      </div>
    </Link>
  );
};

export default ProfileRow;
