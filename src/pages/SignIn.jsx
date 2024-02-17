import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import loginImage from "../assets/loginImage.jpg";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userAction";
import toast, { Toaster } from "react-hot-toast";
import GoogleAuth from '../components/GoogleAuth';
import logo from "../assets/logo.png";



const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading,success, userInfo, error } = userLogin;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    
  };

  useEffect(() => {
    try {
      if (userInfo) {
        navigate("/dashboard");
        
      }
      else {
       error ? toast.error(error) : 'redirecting'
      }
    } catch (error) {
      //console.log(error);
    }
  }, [success,error]);

  // useEffect(() => {
  //   error && toast.error(error);
  // }, [error]);

  const handleGoogleAuthSuccess = (response) => {
    // Handle successful Google authentication here
    //console.log('Google Auth Success:', response);
  };

  const handleGoogleAuthFailure = (error) => {
    // Handle Google authentication failure here
    console.error('Google Auth Failure:', error);
  };


  return (
    <>
      <Toaster />
      <section className="grid md:grid-cols-2  w-screen h-screen overflow-hidden">
        <section className="form-section w-full h-full flex items-center justify-center flex-col">
        <section>
        <section className=" p-5 fixed left-0 top-0">
            <img
            src={logo} // Replace with the actual path to your logo image
            alt="Logo"
            className="w-12 h-12 mr-2" // Adjust the width and height as needed
          />
        </section>
       
          <section className="flex justify-between items-start">
          <section className="flex items-center justify-center flex-col gap-y-2" >
            <h1 className="text-[#559fff] font-bold text-4xl text-center capitalize">
            welcome back!
            </h1>
            <p className="">Ready to gather the thought once again?</p>
          </section>
          </section>
        </section>
          <br />
          <form className="w-11/12 lg:w-8/12 md:p-5 " onSubmit={handleLogin}>
            <section>
              <label htmlFor="email" className="capitalize my-2">
                email address
              </label>
              <input
                className="p-4 w-full border-[1px] border-black rounded-[8px] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter your email address"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
              />
            </section>
                <Link to="/forgetpassword">
                <span className="text-blue-100"><p className="text-right">Forgot password</p></span>
              </Link>
            <section className="my-2">
              <label htmlFor="password" className="capitalize my-2">
                password
              </label>
              <input
                className="p-4 w-full border-[1px] border-black rounded-[8px] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter your password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
              />
            </section>

            <section>
            <input  type="checkbox" name="termsAndCondition" />
            <p className="inline-block px-2">
             stay signed in
            </p>
          </section>

         
            <br />

            <section>
              <Button type="submit">
                {" "}
                {loading ? "Authenticating...." : "Login"}
              </Button>
            </section>

            <p className="text-center">
            <Link to="/sign-up">
              <span className="text-blue-100"><p className="text-right">Don’t have an account</p></span>
            </Link>
          </p>
          {/*<section className=" w-full rounded-lg flex items-center justify-around p-2 my-4">
              <GoogleAuth onSuccess={handleGoogleAuthSuccess} onFailure={handleGoogleAuthFailure} className="w-full" />
            </section>*/}
            <button>

            </button>

            <section>
             
            </section>
          </form>
        </section>
        <section className="image-section h-full w-full md:flex hidden justify-end overflow-hidden">
          <img
            src={loginImage}
            alt="login image"
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </section>
      </section>
    </>
  );
};

export default SignIn;
