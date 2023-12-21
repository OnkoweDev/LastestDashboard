// BCDIcons.js
import React from "react";
import "./styles/BCDIcons.css";
import { MdOutlineContentCopy } from "react-icons/md";



const BCDIcons = () => {
  return (
    <div className="right-icons-container-fa">
      <button className="icon-contain">
        <MdOutlineContentCopy className="icon" />
      </button>
    </div>
  );
};

export default BCDIcons;
