import React, { useState } from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Password.css";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { changePasswordAction } from "../actions/backend/changePasswordAction";

const Password = () => {
  const [showPassowrd, setShowPassword] = useState(false);
  const [newPassowrd, setNewPassword] = useState(false);
  const [confirmPassowrd, setConfirmPassword] = useState(false);

  const [oldPassword, setOldPassword] = useState('');
  const [new_Passowrd, setNew_Password] = useState('');
  const [confirm_password, setConfirm_Password] = useState('');
  const dispatch = useDispatch()
  const changePassword = useSelector((state)=>state.changePassword)
  const {loading,error, success} = changePassword



  const showPassword = () => {
    setShowPassword(!showPassowrd);
  };
  const showNewPassword = () => {
    setNewPassword(!newPassowrd);
  };
  const showConfirmPassword = () => {
    setConfirmPassword(!confirmPassowrd);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changePasswordAction(oldPassword,new_Passowrd,confirm_password))
    console.log(oldPassword,new_Passowrd,confirm_password)
  }
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
                <form onSubmit={handleSubmit}>
                {error && <div className=' bar error'>{error}</div>}
                {success && <p style={{color:"green"}}>password updated successfully</p>}

                  <div className="input__container">
                    <label htmlFor="currentPassword">Current password</label>

                    <article className="input__wrapper">
                      <input
                        type={showPassowrd ? "text" : "password"}
                        className="input"
                        onChange={(e)=>setOldPassword(e.target.value)}
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
                        onChange={(e)=>setNew_Password(e.target.value)}
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
                        onChange={(e)=>setConfirm_Password(e.target.value)}
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
                    {loading ? "updating password": "update"}
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
