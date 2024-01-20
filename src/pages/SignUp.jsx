import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import loginImage from "../assets/signInImage.png";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userAction";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [full_name, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  return (
    <>
      <Toaster />
      <section className="grid md:grid-cols-2  w-screen h-screen overflow-hidden">
        <section className="form-section w-full h-full flex items-center justify-center flex-col">
          <section className="flex items-center justify-center pt-2 flex-col">
            <h1 className="text-[#559fff] font-bold text-4xl text-center capitalize">
              sign up
            </h1>
          </section>

          <br />
          <form
            className="w-11/12 lg:w-8/12"
            onSubmit={handleRegister}
            novalidate
          >
            <section className="my-1">
              <label htmlFor="email" className="capitalize my-2">
                full name
              </label>
              <input
                className="p-4 w-full border-[1px] border-black rounded-[8px] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter your full name"
                name="email"
                type="text"
                onChange={(e) => setFullname(e.target.value)}
                value={full_name}
              />
            </section>

            <section className="my-3">
              <label htmlFor="email" className="capitalize my-2">
                email address
              </label>
              <input
                className="p-4 w-full border-[1px] border-black rounded-[8px] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter your email address"
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </section>

            <section>
              <input required type="checkbox" name="termsAndCondition" />
              <p className="inline-block px-2">
                I’ve agreed to the Terms and Conditions
              </p>
            </section>

            <br />

            <section>
              <Button> {loading ? "Processing please wait" : "Sign Up"}</Button>
            </section>

            <br />

            <section className="flex w-full items-center justify-center p-2">
              <p className="text-center capitalize">sign up with</p>

              <section className="border-[1px] border-black w-96 rounded-lg flex items-center justify-around p-2 my-2">
                <FcGoogle className="w-8 h-8 cursor-pointer" />
                <BsFacebook className="w-8 h-8 text-[#4267B2] cursor-pointer" />
                <FaTwitter className="w-8 h-8 text-[#1DA1F2] cursor-pointer" />
              </section>
            </section>

            <section>
              <p className="text-center">
                Have an account?{" "}
                <Link to="/">
                  <span className="text-blue-100">Login</span>
                </Link>
                <br />
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

export default SignUp;
