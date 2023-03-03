import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Profile.css";

const Profile = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container profile__container">
          <SideNav />
          <div className="content">
            <div className="inner-page-container">
              <section className="heading__container">
                <p>Personal Information</p>
              </section>
              <hr />
              <section className="form__container">
                <form action="">
                  <article>
                    <aside>
                      <label htmlFor="FirstName">First Name</label>
                      <input type="text" className="input" name="FirstName" />
                    </aside>
                    <aside>
                      <label htmlFor="LastName">Last Name</label>
                      <input type="text" className="input" name="LastName" />
                    </aside>
                  </article>
                  <article>
                    <aside>
                      <label htmlFor="userName">Username</label>
                      <input type="text" className="input" name="userName" />
                    </aside>
                    <aside>
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input type="tel" className="input" name="phoneNumber" />
                    </aside>
                  </article>
                  <article>
                    <aside>
                      <label htmlFor="country">Country</label>
                      <input type="text" className="input" name="country" />
                    </aside>
                    <aside>
                      <label htmlFor="url">URL</label>
                      <input type="url" className="input" name="url" />
                    </aside>
                  </article>
                  <article>
                    <aside>
                      <label htmlFor="email">Email Address</label>
                      <input type="email" className="input" name="email" />
                    </aside>
                  </article>
                  <div className="textarea__div">
                    <aside>
                      <label htmlFor="about">About</label>
                      <textarea name="about" id=""></textarea>
                      <small>Brief description for your profile</small>
                    </aside>
                  </div>
                  <button
                    className="btn article-btn"
                    style={{ fontSize: "16px" }}
                  >
                    Update Information
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
