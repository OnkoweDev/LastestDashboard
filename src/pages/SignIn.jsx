import React, { useEffect, useState } from "react";
import "./styles/SignInUp.css";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import image from "../assets/signInImage.png";
import loginImage from "../assets/loginImage.jpg";
import logo from "./../assets/logo.png"


import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userAction";
import Loader from "../components/Loader";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const SignIn = () => {
    const [email,setEmail] = useState({})
    const [password,setPassword] = useState({})
    const [message,setMessage] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userLogin = useSelector((state)=>state.userLogin)
    const {loading, userInfo,error} = userLogin

    const handleLogin = (e) =>{
        e.preventDefault()
       dispatch(login(email,password))
    }

    useEffect(() => {
       try {
        if(userInfo){
            navigate('/dashboard')
            
        }
       } catch (error) {
        console.log(error)
       }
    }, [userInfo])
    

    const [showPassowrd, setShowPassword] = useState(false);
  const showPassword = () => {
    setShowPassword(!showPassowrd);
  };
  return (
    <div className="sign__container">
    <img src={logo} alt="Logo" className="logo" />
      <section className="form__section">
        <div className="form__section__wrapper">
            
          <h5>Welcome Back!</h5>
          <br />
          <small>Ready to gather the thought once again?</small>
            
             {error && <div className=' bar error'>{error}</div>}
          <form onSubmit={handleLogin}>
            <label  htmlFor="email">Email Address</label>
            <input required placeholder="email" type="email" name="email" className="input"
            // value={email} 
             onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="Password">Password</label>
            <div className="input__container">
              <article className="input__wrapper">
                <input
                  required
                  type={showPassowrd ? "text" : "password"}
                  className="input"
                  //value={password}
                  placeholder="password"
                  onChange={(e)=>setPassword(e.target.value)}
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
            {/* btn */}
            <button type="submit" className="btn article-btn" style={{ fontSize: "16px" }}>
              { loading ? "Authenticating...." : "Login"}
            </button>
          </form>
          {/* other sign up options */}
          <p className="sign__up__option__text">Or Log in with </p>
          <div className="sign__up__options">
          <button  style={{ color: "red",size:'50px'}}> <FcGoogle style={{width:'30px', height:'30px'}} /></button>
          <button style={{ color: "#4267B2"}}><BsFacebook style={{width:'30px', height:'30px'}} /></button>
          <button style={{ color: "#1DA1F2"}}><FaTwitter style={{width:'30px', height:'30px'}} /></button>
          </div>
          <p
            style={{ textAlign: "center", margin: "10px 0" }}
            className="login__text"
          >
            Don’t have an account? <Link to="/sign-up"><b>Sign Up</b></Link>
            <br />
            <Link to="/forgetpassword"><b>Forgot password</b></Link>
          </p>
        </div>
      </section>
      <section className="image__section">
        <img src={loginImage} alt="" />
      </section>
    </div>
  );
};

export default SignIn;
