import React, { useState } from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Collaborate.css";
import profile from "../assets/dummyProfile.png";
import { VscSourceControl } from "react-icons/vsc";
import { RxPerson } from "react-icons/rx";
import { FiMessageCircle } from "react-icons/fi";
import { AiOutlineSearch, AiOutlineAudio } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
import { GrFormCheckmark } from "react-icons/gr";

const Collaborate = () => {
  const [team, setTeam] = useState(false);
  const [message, setMessage] = useState(false);

  const display = document.querySelector(".display__ul");

  // to toggle when team icon is clicked
  const selectTeam = () => {
    setTeam((team) => !team);
    setMessage(false);
  };

  // to toddgle when message icon is clicked
  const selectMssg = () => {
    setMessage((message) => !message);
    setTeam(false);
  };

  // dummy list
  const collabs = [
    { name: "William", picture: profile },
    { name: "Ade Fijabi", picture: profile },
    { name: "Willy", picture: profile },
    { name: "Hannah", picture: profile },
    { name: "Josephina Condori", picture: profile },
    { name: "Helen Article", picture: profile },
    { name: "Joy", picture: profile },
  ];

  const findTeam = () => {
    // detting the input value from the search box
    const input = document.querySelector(".input__box");
    let inputValue = input.value;
    // display box to display the data of the search input

    collabs.map((person) => {
      if (inputValue !== "" && person.name.includes(inputValue)) {
        document.querySelector(".display__ul").innerHTML += `<aside>
          <div className="left">
            <div><img src=${person.picture} alt="" /></div>
            <h3>${person.name}</h3>
          </div>
          <div className="right">
            <button><VscSourceControl/></button>
            <button>Y</button>
          </div>
        </aside>`;

        console.log(person.name);
      } else if (inputValue === "") {
        console.log("input field is empty");
        document.querySelector(".display__ul").textContent = "";
      }

      // document.querySelector(".display__ul").textContent = "";
    });
  };

  //

  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content ">
            <div className="inner-container team">
              <section className="team-row top-section">
                <article className="left">
                  <h4>Comming Soon</h4>
                  <small>
                    collaboration coming soon
                  </small>
                </article>
                <article className="right">
                  <aside className="top">
                    <button
                      className="article-btn"
                      style={{ fontSize: "14px" }}
                    >
                      Limited access
                    </button>
                    <div className="images">
                      <img src={profile} alt="" />
                      <img src={profile} alt="" />
                      <img src={profile} alt="" />
                      <img src={profile} alt="" />
                      <img src={profile} alt="" />
                    </div>
                  </aside>
                  <aside className="bottom">
                    <div className="icons-container">
                      <RxPerson
                        className="icon"
                        onClick={selectTeam}
                        style={
                          team
                            ? {
                                color: "var(--hover-blue)",
                                borderColor: "var(--hover-blue)",
                              }
                            : {
                                color: "var(--light-grey)",
                                borderColor: "var(--light-grey)",
                              }
                        }
                      />
                      <FiMessageCircle
                        className="icon"
                        onClick={selectMssg}
                        style={
                          message
                            ? {
                                color: "var(--hover-blue)",
                                borderColor: "var(--hover-blue)",
                              }
                            : {
                                color: "var(--light-grey)",
                                borderColor: "var(--light-grey)",
                              }
                        }
                      />
                      <VscSourceControl className="icon" />
                    </div>
                    <button
                      className="article-btn"
                      style={{ fontSize: "14px" }}
                    >
                      New Board
                    </button>
                  </aside>
                </article>
              </section>
              {/* bottom section */}
              {/* team section */}
              <section className="bottom__section">
                {team ? (
                  <article className="bottom__team__section">
                    <div className="search__bar">
                      <AiOutlineSearch className="search__icon" />
                      <input
                        type="text"
                        placeholder="felix"
                        className="input__box"
                        onChange={findTeam}
                      />
                    </div>
                    {/* display box */}
                    <aside className="display__box">
                      <article className="display__ul"></article>
                    </aside>
                  </article>
                ) : (
                  <article className="bottom__team__section"></article>
                )}
                {/* when message icon is toggled */}
                {message ? (
                  <article className="bottom__team__section">
                    <aside className="message__team__wrapper">
                      <button className="mssg__mic__icon">
                        <AiOutlineAudio className="icon" />
                      </button>
                    </aside>
                  </article>
                ) : (
                  <article className="bottom__team__section"></article>
                )}
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Collaborate;
