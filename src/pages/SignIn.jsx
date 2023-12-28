import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import loginImage from "../assets/signInImage.png";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userAction";
import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLogin;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    try {
      if (userInfo) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  }, [userInfo]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  return (
    <>
      <Toaster />
      <section className="grid md:grid-cols-2  w-screen h-screen">
        <section className="form-section w-full h-full flex items-center justify-center flex-col">
          <section className="flex items-center justify-center flex-col gap-y-2">
            <h1 className="text-[#559fff] font-bold text-4xl text-center capitalize">
              welcome back!
            </h1>
            <p className="">Ready to gather the thought once again?</p>
          </section>

          <br />
          <form className="w-11/12 lg:w-8/12 md:p-5 " onSubmit={handleLogin}>
            <section className="my-3">
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

            <section className="my-3">
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

            <br />

            <section>
              <Button type="submit">
                {" "}
                {loading ? "Authenticating...." : "Login"}
              </Button>
            </section>

            <br />

            <section className="flex w-full items-center justify-center flex-col p-2">
              <p className="text-center capitalize">or login with</p>

              <section className="border-[1px] border-black w-96 rounded-lg flex items-center justify-around p-2 my-4">
                <FcGoogle className="w-8 h-8 cursor-pointer" />
                <BsFacebook className="w-8 h-8 text-[#4267B2] cursor-pointer" />
                <FaTwitter className="w-8 h-8 text-[#1DA1F2] cursor-pointer" />
              </section>
            </section>

            <section>
              <p className="text-center m-5">
                Don’t have an account?{" "}
                <Link to="/sign-up">
                  <span className="text-blue-100">Sign Up</span>
                </Link>
                <br />
                <Link to="/forgetpassword">
                  <span className="text-blue-100">Forgot password</span>
                </Link>
              </p>
            </section>
          </form>
        </section>
        <section className="image-section w-full md:flex hidden justify-end overflow-hidden">
          <img
            src={loginImage}
            alt="login image"
            className="object-contain h-full"
          />
        </section>
      </section>
    </>
  );
};

export default SignIn;
