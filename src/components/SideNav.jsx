import React from "react";
import SidebarRow from "./SidebarRow";
import "./styles/SideNav.css";

import {
  BiHomeAlt,
  BiCloudUpload,
  BiFont,
  BiFile,
  BiGridAlt,
  BiHelpCircle,
  BiFileFind,
} from "react-icons/bi";

import { GiSoundWaves } from "react-icons/gi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { GrNotification } from "react-icons/gr";

const SideNav = () => {
  const refresh = () => window.location.reload(true)

  return (
    <div className="side-nav">
      <SidebarRow Icon={BiHomeAlt} title={"Home"} link='/' />
    {  /*<SidebarRow Icon={BiCloudUpload} title={"Upload"} link='/upload' />
  <SidebarRow Icon={BiFont} title={"Font"} link='/font' />*/}
     { /*<SidebarRow Icon={BiFile} title={"Resources"} link='/resources' />*/}
      <SidebarRow Icon={BiGridAlt} title={"Theme"} link='/theme' />
      <SidebarRow Icon={GiSoundWaves} title={"Transcribe"} link='/audio' />
      <SidebarRow Icon={BiHelpCircle} title={"Help"} link='/help' />
      <SidebarRow Icon={MdOutlineSettingsSuggest} title={"Suggest Feature"} link='/suggest' />
      <SidebarRow Icon={GrNotification} title={"Notification"} link='/notification' />      
      <button  className="btn article-btn" onClick={refresh}>Refresh</button>

    </div>
  );
};

export default SideNav;
