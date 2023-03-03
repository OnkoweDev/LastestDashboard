import React from "react";

import { CiPause1 } from "react-icons/ci";
import { FiStopCircle } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
import { RiVoiceprintFill } from "react-icons/ri";

const Voice = () => {
  // state

  return (
    <div className="voice-div">
      <button
        className="icon-div"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <RiVoiceprintFill />
      </button>
      <button
        className="icon-div"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <CiPause1 />
      </button>
      <button
        className="icon-div"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <FiStopCircle />
      </button>
      <button
        className="icon-div"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <HiOutlinePencil />
      </button>
    </div>
  );
};

export default Voice;
