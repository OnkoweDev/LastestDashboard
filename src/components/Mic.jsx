import React, { useState } from "react";

import { AiOutlineAudio, AiOutlineAudioMuted } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";

const Mic = () => {
  // state
  let current = false;
  const [isActive, setIsActive] = useState(current);
  return (
    <div className="voice-div">
      <button
        className="icon-div"
        onClick={(e) => {
          e.preventDefault();
          setIsActive((current = !current));
          console.log(isActive);
        }}
      >
        {isActive ? (
          <AiOutlineAudioMuted className="icon" />
        ) : (
          <AiOutlineAudio className="icon" />
        )}
      </button>
    </div>
  );
};

export default Mic;
