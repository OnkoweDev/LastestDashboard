import React, { useState,useEffect } from "react";
import "./styles/SignInUp.css";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import image from "../assets/signInImage.png";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userAction";
import Loader from "../components/Loader";


const SignUp = () => {
    const [full_name, setFullname] = useState({})
    const [email, setEmail] = useState({})
    const [password, setPassword] = useState({})
    const [message, setMessage] = useState("")

    const dispatch = useDispatch()
    const navigate  = useNavigate()
    const userRegister = useSelector((state=>state.userRegister))
    const {loading,error,userInfo} = userRegister

    const handleRegister = (e) =>{
        e.preventDefault()
        dispatch(register(full_name,email,password))
    }

    useEffect(()=>{
        if(userInfo){
            navigate('/dashboard')
        }
    },[userInfo])



    const [showPassowrd, setShowPassword] = useState(false);
    const showPassword = () => {
        setShowPassword(!showPassowrd);
    };
  return (
    <div className="sign__container">
      <section className="form__section">
        <div className="form__section__wrapper">
          <h5>Sign Up</h5>
          {loading && <Loader />}
             {error && <div className=' bar error'>{error}</div>}
          <form onSubmit={handleRegister}>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" name="fullName" className="input" 
            //value={full_name} 
            onChange={(e)=>setFullname(e.target.value)} />
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" className="input" //value={email} 
            onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="Password">Password</label>
            <div className="input__container">
              <article className="input__wrapper">
                <input
                  type={showPassowrd ? "text" : "password"}
                  className="input"
                  //value={password}
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
            <div className="checkbox__div">
              <input type="checkbox" name="consent" id="consent" />
              <label htmlFor="consent">
                I’ve agree to the Terms and have read and acknowledge our
                Privacy
              </label>
            </div>
            {/* btn */}
            <button className="btn article-btn" style={{ fontSize: "16px" }}>
             {loading ? "Loading please wait": "Sign Up" }
            </button>
          </form>
          {/* other sign up options */}
          <p className="sign__up__option__text">Or sign Up with </p>
          <div className="sign__up__options">
            <button>Y</button>
            <button>Y</button>
            <button>Y</button>
          </div>
          <p
            style={{ textAlign: "center", margin: "10px 0" }}
            className="login__text"
          >
            Already have account? <Link to="/">Login</Link>
          </p>
        </div>
      </section>
      <section className="image__section">
        <img src={image} alt="" />
      </section>
    </div>
  );
};

export default SignUp;
