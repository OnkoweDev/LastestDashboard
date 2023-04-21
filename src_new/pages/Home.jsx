import React, { useState } from "react";
import { SideNav, TopNav, Voice, HomepageData, Modal } from "../components";
import "./styles/Home.css";
// import youtube from "../assets/youtube.jpg";
// import Facebook from "../assets/Facebook.jpg";
// import blogIntro from "../assets/blogIntro.jpg";
// import GmailLogo from "../assets/GmailLogo.png";
// import blog from "../assets/blog.jpg";
// import Rephraser from "../assets/Rephraser.jpg";
import { Link } from "react-router-dom";

import { FaFacebookF, FaYoutube, FaMailBulk, FaBloggerB } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";

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
        {openModal && (
          <Modal
            closeModal={() => {
              setOpenModal(false);
            }}
          />
        )}
        <div className="container">
          <SideNav />
          <div className="content">
            <div className="cards-container">
              <div className="card">
                <Link to="/all_youtube">
                  {/* <img src={youtube} /> */}
                  {/* <FaYoutube className="icon" style={{ color: "red" }} /> */}
                </Link>
              </div>
              <div className="card">
                <Link to="/allfacebookads">
                  {/* <img src={Facebook} /> */}
                  <FaFacebookF className="icon" style={{ color: "#4267b2" }} />
                </Link>
              </div>
              <div className="card">
                <Link to="/email">
                  {/* <img src={GmailLogo} /> */}
                  <FaMailBulk className="icon" style={{ color: "#3357c0" }} />
                </Link>
              </div>
              <div className="card">
                <Link to="/all_intro">
                  {/* <img src={blogIntro} /> */}
                  <TfiWrite className="icon" style={{ color: "#002366" }} />
                </Link>
              </div>
              <div className="card">
                <Link to="/allblogs">
                  {/* <img src={blog} /> */}
                  <FaBloggerB className="icon" style={{ color: "#fc4f08" }} />
                </Link>
              </div>

              <div className="card">
                {/* <img src={Rephraser} /> */}
                <GiWhiteBook className="icon" />
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
