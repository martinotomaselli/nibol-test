'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type LoginContextType = {
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
};

const LoginContext = createContext<LoginContextType>({
  loggedIn: false,
  setLoggedIn: () => {},
});

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('loggedIn') === 'true';
    setLoggedIn(saved);
  }, []);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
