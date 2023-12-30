import React, { useState, useEffect } from "react";
import "./styles/SignInUp.css";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userAction";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import loginImage from "./../assets/signInImage.png";
import logo from "../assets/logo.png";
import Button from "../components/Button";

const SignUp = () => {
  const [full_name, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(full_name, email, password));
    console.log(full_name);
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [userInfo]);

  const [showPassowrd, setShowPassword] = useState(false);
  const showPassword = () => {
    setShowPassword(!showPassowrd);
  };
  return (
    <div className="sign__container bg-[#FCFCFC]">
      <img src={logo} alt="Logo" className="logo" />
      <section className="form__section">
        <div className="form__section__wrapper">
          <h5>Sign Up</h5>
          {error && <div className="bar error">{error}</div>}
          <form onSubmit={handleRegister} novalidate>
            <label htmlFor="fullName" className="py-2">
              Full Name
            </label>
            <input
              required
              type="text"
              placeholder="Enter your fullname"
              name="fullName"
              className="p-4 w-full border-[1px] border-black rounded-[8px] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
              //value={full_name}
              onChange={(e) => setFullname(e.target.value)}
              value={full_name}
            />
            <label htmlFor="email" className="py-2">
              Email Address
            </label>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="p-4 w-full border-[1px] border-black rounded-[8px] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="Password" className="py-2">
              Password
            </label>
            <div className="input__container">
              <article className="input__wrapper">
                <input
                  required
                  name="password"
                  type={showPassowrd ? "text" : "password"}
                  placeholder="Enter your password"
                  className="p-4 w-full border-[1px] border-black rounded-[8px] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center"
                  //value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                {showPassowrd ? (
                  <AiOutlineEyeInvisible
                    className="icon w-5 h-5"
                    onClick={showPassword}
                  />
                ) : (
                  <AiOutlineEye
                    className="icon w-5 h-5"
                    onClick={showPassword}
                  />
                )}
              </article>
            </div>
            <input type="checkbox" className="checkbox inline" />
            <p className="inline md:px-3 px-5">I’ve agreed to the T & C</p>
            <br />
            <Button> {loading ? "Processing please wait" : "Sign Up"}</Button>
          </form>
          {/* other sign up options */}
          {/*<p className="sign__up__option__text my-3 md:flex hidden">
            Or sign Up with{" "}
                </p>*/}

         {/* <p className="my-3 md:hidden block text-center"> Or sign Up with </p> */}

         { /*<div className="sign__up__options">
            <button style={{ color: "red", size: "50px" }}>
              {" "}
              <FcGoogle style={{ width: "30px", height: "30px" }} />
            </button>
            <button style={{ color: "#4267B2" }}>
              <BsFacebook style={{ width: "30px", height: "30px" }} />
            </button>
            <button style={{ color: "#1DA1F2" }}>
              <FaTwitter style={{ width: "30px", height: "30px" }} />
            </button>
                </div>*/ }
          <p
            style={{ textAlign: "center", margin: "10px 0" }}
            className="login__text"
          >
            Already have account?{" "}
            <Link to="/" className="text-blue-100">
              Login
            </Link>
          </p>
        </div>
      </section>
      <section className="image__section">
        <img src={loginImage} alt="" />
      </section>
    </div>
  );
};

export default SignUp;
