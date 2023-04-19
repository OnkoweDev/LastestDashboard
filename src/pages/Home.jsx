import React, { useState } from "react";
import { SideNav, TopNav, Voice, HomepageData,Modal } from "../components";
import "./styles/Home.css";
// import youtube from "../assets/youtube.jpg";
// import Facebook from "../assets//Facebook.jpg";
// import blogIntro from "../assets/blogIntro.jpg";
// import GmailLogo from "../assets/GmailLogo.png";
// import blog from "../assets/blog.jpg";
// import Rephraser from "../assets/Rephraser.jpg";
import { Link } from "react-router-dom";

import { FaFacebookF, FaYoutube, FaMailBulk, FaBloggerB, FaParagraph, FaGooglePlus, FaBlog } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";
import { BsImages, BsLinkedin, BsTwitter } from "react-icons/bs";
import { AiOutlineLinkedin, AiTwotoneAudio } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { GrGoogle } from "react-icons/gr";

const Home = () => {
  // state to hold the data comimg from the database / backend
  const [data, setData] = useState(HomepageData);

  console.log(data);

   const [openModal, setOpenModal] = useState(true);

  // mapped data
  // const mappedData = data.map(({title, content}, index) => {
  //   return (
  //     <div className="card" key={index}>
  //       <h2>{title}</h2>
  //       <p>{content}</p>
  //     </div>
  //   );
  // });

  return (
    <>
      <main>
        <TopNav />
        {/* modal overlay on home page */}
        {
          openModal && (
          <Modal
            closeModal={() => {
              setOpenModal(false);
            }}
          />
          ) }
        <div className="container">
          <SideNav />
          <div className="content">
            <div className="cards-container">
              <div className="card">
                <Link to="/all_youtube">
                  {/* <img src={youtube} /> */}
                  <FaYoutube className="icon" style={{ color: "red" }} />
                  <b>Youtube</b>
                </Link>
              </div>
              <div className="card">
                <Link to="/allfacebookads">
                  {/* <img src={Facebook} /> */}
                  <FaFacebookF className="icon" style={{ color: "#4267b2" }} />
                  <b>Facebook Ads</b>
                </Link>
              </div>
              <div className="card">
                <Link to="/email">
                  {/* <img src={GmailLogo} /> */}
                  <FaMailBulk className="icon" style={{ color: "#3357c0" }} />
                  <b>Email</b>
                </Link>
              </div>

              <div className="card">
              <Link to="/allemailSubject">
                {/* <img src={GmailLogo} /> */}
                <FaMailBulk className="icon" style={{ color: "#3357c0" }} />
                <b>Email Subject</b>
              </Link>
            </div>
              <div className="card">
                <Link to="/all_intro">
                  {/* <img src={blogIntro} /> */}
                  <TfiWrite className="icon" style={{ color: "#002366" }} />
                  <b>Blog Intro</b>
                </Link>
              </div>
              <div className="card">
                <Link to="/allblogs">
                  {/* <img src={blog} /> */}
                  <FaBloggerB className="icon" style={{ color: "#fc4f08" }} />
                  <b>Blog Article</b>
                </Link>
              </div>

                <div className="card">
                  <Link to='/all_link_post'>
                  <BsLinkedin className="icon" style={{ color: "#4267b2" }} />
                  <b>Linkdlin Post</b>
                  </Link>
                </div>

                <div className="card">
                <Link to='/all_paragraph'>
                  <FaParagraph className="icon" style={{ color: "#4267b2" }} />
                  <b>Paragraph</b>
                </Link>
              </div>

                <div className="card">
                <Link to='/all_ebook'>
                <GiWhiteBook className="icon" style={{ color: "#4267b2" }} />
                <b>Ebook</b>
                </Link>
              </div>

              <div className="card">
              <Link to="/all_linkedin_ads">
              <AiOutlineLinkedin className="icon" style={{ color: "#4267b2" }} />
              <b>Linkdlin Ads</b>
              </Link>
            </div>

            <div className="card">
              <Link to="/allinstagram">
              <FiInstagram className="icon" style={{ color: "#4267b2" }} />
              <b>Instagram Post</b>
              </Link>
            </div>

            <div className="card">
            <Link to="/all_tweet">
            <BsTwitter className="icon" style={{ color: "#4267b2" }} />
            <b>Twitter Post</b>
            </Link>
          </div>

            <div className="card">
            <Link to="/allgoogleads">
            <GrGoogle className="icon" style={{ color: "#4267b2" }} />
            <b>Google Ads</b>
            </Link>
          </div>

          <div className="card">
          <Link to="/alltitle">
          <FaGooglePlus className="icon" style={{ color: "#4267b2" }} />
          <b>Google Title</b>
          </Link>
        </div>

        <div className="card">
        <Link to="/blogsection">
        <FaBlog className="icon" style={{ color: "#4267b2" }} />
        <b>Blog Section</b>
        </Link>
      </div>

      <div className="card">
      <Link to="/all_image">
      <BsImages className="icon" style={{ color: "#4267b2" }} />
      <b>Images</b>
      </Link>
    </div>


    <div className="card">
    <Link to="/all_audio">
    <AiTwotoneAudio className="icon" style={{ color: "#4267b2" }} />
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
