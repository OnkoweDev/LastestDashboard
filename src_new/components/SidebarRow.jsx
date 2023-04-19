import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/SidebarRow.css";

const SidebarRow = ({ Icon, title, link }) => {
  return (
    <NavLink
      to={link}
      className="sidebar-row"
      style={({ isActive }) =>
        isActive
          ? { color: "var(--background)", background: "var(--hover-blue)" }
          : { color: "var(--black)" }
      }
    >
      <Icon className="icon" />
      <p>{title}</p>
    </NavLink>
  );
};

export default SidebarRow;
