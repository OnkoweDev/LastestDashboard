import React, { useState } from "react";
import { SideNav, TopNav, Voice, HomepageData } from "../components";
import "./styles/Home.css";
import youtube from "../assets/youtube.jpg"
import Facebook from "../assets/Facebook.jpg"
import blogIntro from "../assets/blogIntro.jpg"
import GmailLogo from "../assets/GmailLogo.png"
import blog from "../assets/blog.jpg"
import Rephraser from "../assets/Rephraser.jpg"
import { Link } from "react-router-dom";

const Home = () => {
  // state to hold the data comimg from the database / backend
  const [data, setData] = useState(HomepageData);


  console.log(data);
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
        <div className="container">
          <SideNav />
          <div className="content">
            <div className="cards-container">
            <div className="card">
                  <Link to='/all_youtube'>
                  <img src={youtube} />
                  </Link>
                </div>
                <div className="card">
                  <Link to='/allfacebookads'>
                    <img src={Facebook} />
                  </Link>
                </div>
                <div className="card">
                  <Link to="/email">
                    <img src={GmailLogo} />
                  </Link>
                </div>
                <div className="card">
                  <Link to="/all_intro">
                    <img src={blogIntro} />
                  </Link>
                </div>
                <div className="card">
                <Link to='/allblogs'>
                  <img src={blog} />
                </Link>
                </div>

                <div className="card">
                <img src={Rephraser} />
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
