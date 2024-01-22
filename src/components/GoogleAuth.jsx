import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleAuth = ({ onSuccess, onFailure }) => {
  return (
    <GoogleLogin
    
      clientId="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"
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      redirectUri="http://localhost:5173/auth/google/callback"
      className=" border border-black w-full bg-blue-500 text-white font-bold py-8 px-4 rounded-full focus:outline-none focus:shadow-outline"
      style={{ fontSize: '18px' }} 
    />
  );
};

export default GoogleAuth;


