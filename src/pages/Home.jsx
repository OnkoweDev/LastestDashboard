import React, { useState } from "react";
import { SideNav, TopNav, Voice, HomepageData, Modal } from "../components";
import "./styles/Home.css";

import youtube from "../assets/icon/9.png";
import facebook from "../assets/icon/facebook.png";
import gmail from "../assets/icon/19.png";
import blog from "../assets/icon/35.png";
import linkedIn from "../assets/icon/7.png";
import instagram from "../assets/icon/4.png";
import twitter from "../assets/icon/2.png";
import google from "../assets/icon/3.png";
import feed from "../assets/icon/15.png";
import audio from "../assets/icon/31.png";
import image from "../assets/icon/36.png";
import paragraph from "../assets/icon/29.png";
import ebook from "../assets/icon/23.png";

import { Link } from "react-router-dom";


const Home = () => {
  // state to hold the data comimg from the database / backend
  const [data, setData] = useState(HomepageData);

  console.log(data);

  return (
    <>
      <main>
        <TopNav />

        <div className="container">
          <SideNav />
          <div className="content">
            <div className="cards-container">
              <div className="card">
                <Link to="/all_youtube">
                  <img src={youtube} className="icon" />
                  {/* <FaYoutube className="icon" style={{ color: "red" }} /> */}
                  <b>Youtube</b>
                </Link>
              </div>
              <div className="card">
                <Link to="/allfacebookads">
                  <img src={facebook} />
                  {/* <FaFacebookF className="icon" style={{ color: "#4267b2" }} /> */}
                  <b>Facebook Ads</b>
                </Link>
              </div>
              <div className="card">
                <Link to="/email">
                  <img src={gmail} />
                  {/* <FaMailBulk className="icon" style={{ color: "#3357c0" }} /> */}
                  <b>Email</b>
                </Link>
              </div>

              <div className="card">
                <Link to="/allemailSubject">
                  <img src={gmail} />
                  {/* <FaMailBulk className="icon" style={{ color: "#3357c0" }} /> */}
                  <b>Email Subject</b>
                </Link>
              </div>

              <div className="card">
                <Link to="/all_intro">
                  <img src={blog} />
                  {/* <TfiWrite className="icon" style={{ color: "#002366" }} /> */}
                  <b>Blog Intro</b>
                </Link>
              </div>
              <div className="card">
                <Link to="/allblogs">
                  <img src={blog} />
                  {/* <FaBloggerB className="icon" style={{ color: "#fc4f08" }} /> */}
                  <b>Blog Article</b>
                </Link>
              </div>

              <div className="card">
                <Link to="/all_link_post">
                  <img src={linkedIn} alt="" />
                  {/* <BsLinkedin className="icon" style={{ color: "#4267b2" }} /> */}
                  <b>Linkdlin Post</b>
                </Link>
              </div>

              <div className="card">
                <Link to="/all_paragraph">
                  {<img src={paragraph} alt="" />}
                  <b>Paragraph</b>
                </Link>
              </div>

              <div className="card">
                <Link to="/all_ebook">
                  {<img src={ebook} alt="" />}
                  <b>Ebook</b>
                </Link>
              </div>

              <div className="card">
                <Link to="/all_linkedin_ads">
                  <img src={linkedIn} alt="" />
                  {/* <AiOutlineLinkedin
                    className="icon"
                    style={{ color: "#4267b2" }}
                  /> */}
                  <b>Linkdlin Ads</b>
                </Link>
              </div>

              <div className="card">
                <Link to="/allinstagram">
                  <img src={instagram} alt="" />
                  {/* <FiInstagram className="icon" style={{ color: "#4267b2" }} /> */}
                  <b>Instagram Post</b>
                </Link>
              </div>

              <div className="card">
                <Link to="/all_tweet">
                  <img src={twitter} alt="" />
                  {/* <BsTwitter className="icon" style={{ color: "#4267b2" }} /> */}
                  <b>Twitter Post</b>
                </Link>
              </div>

              <div className="card">
                <Link to="/allgoogleads">
                  <img src={google} alt="" />
                  {/* <GrGoogle className="icon" style={{ color: "#4267b2" }} /> */}
                  <b>Google Ads</b>
                </Link>
              </div>

              <div className="card">
                <Link to="/alltitle">
                  <img src={google} alt="" />
                  {/* <FaGooglePlus className="icon" style={{ color: "#4267b2" }} /> */}
                  <b>Google Title</b>
                </Link>
              </div>

              <div className="card">
                <Link to="/blogsection">
                  <img src={feed} alt="" />
                  {/* <FaBlog className="icon" style={{ color: "#4267b2" }} /> */}
                  <b>Blog Section</b>
                </Link>
              </div>

              <div className="card">
                <Link to="/all_image">
                  <img src={image} alt="" />
                  {/* <BsImages className="icon" style={{ color: "#4267b2" }} /> */}
                  <b>Images</b>
                </Link>
              </div>

              <div className="card">
                <Link to="/all_audio">
                  <img src={audio} alt="" />
                  {/* <AiTwotoneAudio
                    className="icon"
                    style={{ color: "#4267b2" }}
                  /> */}
                  <b>Transcribed Audio</b>
                </Link>
              </div>
            </div>
            {/* <Voice /> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
