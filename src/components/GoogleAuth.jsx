import React from 'react';
import { GoogleLogin } from 'react-oauth/google';

const GoogleAuth = ({ onSuccess, onFailure }) => {
  return (
    <GoogleLogin
      clientId="http://140332742327-nt4br00oav2aiv25p54le4jkt3d6lm68.apps.googleusercontent.com/"
      redirectUri="http://localhost:3000/auth/google/callback"
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
};

export default GoogleAuth