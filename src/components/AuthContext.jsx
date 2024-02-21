import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [verificationStatus, setVerificationStatus] = useState(null);

  const setVerificationSuccess = (success) => {
    setVerificationStatus(success);
  };

  return (
    <AuthContext.Provider value={{ verificationStatus, setVerificationSuccess }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
