import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Loader from '../components/Loader'
import toast from "react-hot-toast";

const EmailVerification = () => {
  const location = useLocation();

  useEffect(() => {
    // Extract the verification token from the URL parameters
    const searchParams = new URLSearchParams(location.search);
    const verificationToken = searchParams.get("token");

    // Make an API request to your backend to verify the user
    const verifyUser = async () => {
      try {
        const response = await axios.post("https://dev.olukowe.co/api/auth/verification", { token: verificationToken });
        //console.log(response)

        if (response.data.status == true) {
          // Redirect the user to a success page or login page
          window.location.href = "https://dashboard.olukowe.co/"; // Redirect to a success page
        } else {
          // Handle verification failure (show an error message, etc.)
          toast.error('Verification failed Please try again')
          window.location.href = "https://dashboard.olukowe.co/sign-up"; // Redirect to a failure page
        }
      } catch (error) {
        // Handle any errors during the verification process
        toast.error('Verification failed Please try again')
        console.error(error);
       // window.location.href = "/verification-error"; // Redirect to an error page
      }
    };

    // Call the verification function
    if (verificationToken) {
      verifyUser();
    }
  }, [location.search]);

  return (
    <div>
      {/* You can render a loading spinner or a message while verifying */}
        <Loader />
    </div>
  );
};

export default EmailVerification;
