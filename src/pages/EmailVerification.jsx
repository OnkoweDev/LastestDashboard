import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from '../components/Loader';

const EmailVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // Extract the verification token from the URL parameters
    const searchParams = new URLSearchParams(location.search);
    const verificationToken = searchParams.get("token");

    // Make an API request to your backend to verify the user
    const verifyUser = async () => {
      try {
        const response = await axios.post("https://dev.olukowe.co/api/auth/verification", { token: verificationToken });

        if (response.data.status === true) {
          // Set success message and navigate to a success page or login page
          setMessage("Verification successful. Redirecting you to the login page");
          setTimeout(() => {
            navigate("/"); // Navigate to a login page or desired route
          }, 5000); // Navigate after 2 seconds (adjust as needed)
        } else {
          // Set failure message and navigate to a failure page
          setMessage("Verification failed. Redirecting...");
          setTimeout(() => {
            navigate("/sign-up"); // Navigate to a failure page or desired route
          }, 2000); // Navigate after 2 seconds (adjust as needed)
        }
      } catch (error) {
        // Handle any errors during the verification process
        setMessage("Verification failed. Please try again.");
        console.error(error);
        // Navigate to an error page if needed
        // navigate("/verification-error");
      }
    };

    // Call the verification function
    if (verificationToken) {
      verifyUser();
    }
  }, [location.search, navigate]);

  return (
    <div>
      
      <div className="text-blue-100 text-center mt-7 m-7 border-blue-400 border rounded-lg p-4">
      {message && <p>{message}</p>}
      
      </div>
    </div>
  );
};

export default EmailVerification;
