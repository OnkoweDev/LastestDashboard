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
} from "react-icons/bi";

import { GiSoundWaves } from "react-icons/gi";
import { MdOutlineSettingsSuggest } from "react-icons/md";

const SideNav = () => {
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

    </div>
  );
};

export default SideNav;
