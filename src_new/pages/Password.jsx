import React, { useState } from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Password.css";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Password = () => {
  const [showPassowrd, setShowPassword] = useState(false);
  const [newPassowrd, setNewPassword] = useState(false);
  const [confirmPassowrd, setConfirmPassword] = useState(false);
  const showPassword = () => {
    setShowPassword(!showPassowrd);
  };
  const showNewPassword = () => {
    setNewPassword(!newPassowrd);
  };
  const showConfirmPassword = () => {
    setConfirmPassword(!confirmPassowrd);
  };
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">
            <div className="inner-page-container">
              <section className="password__wrapper">
                <h3>Password</h3>
                <small>
                  Please enter your current password to change your password.
                </small>
                {/* form */}
                <form action="">
                  <div className="input__container">
                    <label htmlFor="currentPassword">Current password</label>

                    <article className="input__wrapper">
                      <input
                        type={showPassowrd ? "text" : "password"}
                        className="input"
                      />
                      {showPassowrd ? (
                        <AiOutlineEyeInvisible
                          className="icon"
                          onClick={showPassword}
                        />
                      ) : (
                        <AiOutlineEye className="icon" onClick={showPassword} />
                      )}
                    </article>
                  </div>
                  {/*  */}
                  <div className="input__container">
                    <label htmlFor="newPassword">New password</label>

                    <article className="input__wrapper">
                      <input
                        type={newPassowrd ? "text" : "password"}
                        className="input"
                      />
                      {newPassowrd ? (
                        <AiOutlineEyeInvisible
                          className="icon"
                          onClick={showNewPassword}
                        />
                      ) : (
                        <AiOutlineEye
                          className="icon"
                          onClick={showNewPassword}
                        />
                      )}
                    </article>
                    <small>
                      Your new password must be more than 8 characters
                    </small>
                  </div>
                  {/*  */}
                  <div className="input__container">
                    <label htmlFor="newPasswordConfirm">
                      Confirm new password
                    </label>

                    <article className="input__wrapper">
                      <input
                        type={confirmPassowrd ? "text" : "password"}
                        className="input"
                      />
                      {confirmPassowrd ? (
                        <AiOutlineEyeInvisible
                          className="icon"
                          onClick={showConfirmPassword}
                        />
                      ) : (
                        <AiOutlineEye
                          className="icon"
                          onClick={showConfirmPassword}
                        />
                      )}
                    </article>
                  </div>
                  {/* btn */}
                  <button
                    className="btn article-btn"
                    style={{ fontSize: "16px" }}
                  >
                    Update password
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

export default Password;
