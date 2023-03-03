import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Preference.css";

const Preference = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container preference">
          <SideNav />
          <div className="content">
            <div className="inner-page-container">
              <section className="preference__container">
                <h3>Preferences</h3>
              </section>
              <hr />
              <section className="preference__container">
                <form action="">
                  <article>
                    <label htmlFor="">System Language</label>
                    <small>Set the default language for the system</small>
                    <select name="systemLanguage" id="">
                      <option value="English">English</option>
                    </select>
                  </article>
                  {/*  */}
                  <article>
                    <label htmlFor="">Generation Language</label>
                    <small>
                      Set the default language for the output generation
                    </small>
                    <select name="generationLanguage" id="">
                      <option value="English">English</option>
                    </select>
                  </article>
                  {/*  */}
                  <article>
                    <label htmlFor="">Generation Quality</label>
                    <small>
                      Set the default quality for the output generation
                    </small>
                    <select name="quality" id="">
                      <option value="English">English</option>
                    </select>
                  </article>
                </form>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Preference;
