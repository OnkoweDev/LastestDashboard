import React, { useState } from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Password.css";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
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
        <div className="container">
          <div className="content">
            <div>
              <section className="password__wrapper">
                <h3>Email</h3>
                <small>
                  Please enter the email you used to register.
                </small>
                {/* form */}
                <form action="">
                  <div className="input__container">
                    <label htmlFor="currentPassword">Email</label>

                    <article className="input__wrapper">
                      <input
                        required
                        type="email"
                        className="input"
                      />
                      {showPassowrd ? (
                        <TfiEmail 
                          className="icon"
                        
                        />
                      ) : null}
                    </article>
                   
                  </div>
                  {/*  */}
                 
                  {/* btn */}
                  <button
                    className="button"
                    style={{ fontSize: "16px" }}
                  >
                    Submit
                  </button>
                  <br />
                  <Link to='/'>Back</Link>
                </form>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ForgetPassword;
