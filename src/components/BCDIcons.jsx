import React from "react";
import "./styles/BCDIcons.css";

import {
  MdBookmarkBorder,
  MdDeleteOutline,
  MdOutlineContentCopy,
} from "react-icons/md";



const BCDIcons = ({ handleBookmark, handleDelete, handleCopy }) => {
    const handle = () => {
        console.log('clicked copy')
    }
  return (
    <div className="right-icons-container-fa">
      <button className="icon-contain">
        <MdBookmarkBorder onClick={handleBookmark} className="icon" />
      </button>
      <button className="icon-contain">
        <MdDeleteOutline onClick={handleDelete} className="icon" />
      </button>
      <button className="icon-contain">
        <MdOutlineContentCopy onClick={handleCopy} className="icon" />
      </button>
    </div>
  );
};

export default BCDIcons;
