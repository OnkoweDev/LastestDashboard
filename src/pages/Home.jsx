import React, { useState } from "react";
import { SideNav, TopNav, Voice, HomepageData } from "../components";
import "./styles/Home.css";

const Home = () => {
  // state to hold the data comimg from the database / backend
  const [data, setData] = useState(HomepageData);


  console.log(data);
  // mapped data
  const mappedData = data.map(({title, content}, index) => {
    return (
      <div className="card" key={index}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    );
  });

  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">
            <div className="cards-container">{mappedData}</div>
            {/* <Voice /> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
