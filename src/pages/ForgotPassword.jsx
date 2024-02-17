import React, { useState } from "react";
import "./styles/Password.css";
import Button from "../components/Button";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email) {
      return toast.error("Please enter a valid email address");
    }

    try {
      const getData = async () => {
        const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        };

        const response = await fetch(
          "https://dev.olukowe.co/api/auth/forgot-password",
          config
        );

        const data = await response.json();
        if (data.status) {
          toast.success(data.message);
        }
        //console.log(data);
        setIsLoading(false);
      };

      getData();
    } catch (error) {
      //console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <main className="w-screen h-screen flex items-center justify-center">
        <Toaster />
        <div className="flex flex-col items-center w-full">
          <section className="icon flex items-center justify-center my-4">
            <svg
              width="75"
              height="75"
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="37.5" cy="37.5" r="37.5" fill="#DDE8F7" />
              <circle cx="37" cy="37" r="25" fill="#EBF3FF" />
              <path
                d="M45.9983 27L43.9983 29M36.3883 36.61L40.4983 32.5M40.4983 32.5L43.4983 35.5L46.9983 32L43.9983 29M40.4983 32.5L43.9983 29M36.3883 36.61C36.9047 37.1195 37.3151 37.726 37.5961 38.3948C37.877 39.0635 38.0229 39.7813 38.0253 40.5066C38.0278 41.232 37.8867 41.9507 37.6102 42.6213C37.3338 43.2919 36.9274 43.9012 36.4145 44.4141C35.9016 44.9271 35.2922 45.3334 34.6216 45.6099C33.951 45.8864 33.2323 46.0275 32.507 46.025C31.7816 46.0226 31.0639 45.8767 30.3951 45.5958C29.7264 45.3148 29.1198 44.9043 28.6103 44.388C27.6085 43.3507 27.0541 41.9614 27.0666 40.5193C27.0791 39.0772 27.6576 37.6977 28.6773 36.678C29.6971 35.6583 31.0765 35.0798 32.5186 35.0673C33.9607 35.0548 35.35 35.6091 36.3873 36.611L36.3883 36.61Z"
                stroke="#559FFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </section>
          <section>
            <h3 className="font-extrabold text-3xl capitalize mt-3 text-center">
              Forgot Password?
            </h3>
            <p className="text-[#001633B2] text-sm py-2">
              No worries, we’ll send you reset instructions
            </p>
          </section>

          <form
            className="w-11/12 md:w-1/2 xl:w-1/4 my-3"
            onSubmit={handleSubmit}
          >
            <section>
              <label htmlFor="email" className="capitalize py-2">
                Email Address
              </label>

              <input
                required
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="p-4 w-full border-[1px] border-black rounded-[8px] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center"
                placeholder="Enter your email address"
              />
            </section>
            <br />
            <Button disabled={isLoading}>
              {isLoading ? "Loading" : "Reset Password"}
            </Button>
            <br />
            <br />
            <Button className="flex items-center justify-center gap-x-3 capitalize border-[1px] bg-transparent  text-black">
              <IoArrowBackSharp />
              <Link to="/" className="text-black">
                {" "}
                back to login
              </Link>
            </Button>
          </form>
        </div>
      </main>
    </>
  );
};

export default ForgetPassword;
