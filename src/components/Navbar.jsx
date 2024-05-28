import React, { createContext, useContext, useState } from 'react';

// Context 생성
const NavbarContext = createContext();

export const useNavbar = () => {
  return useContext(NavbarContext);
};

export const NavbarProvider = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <NavbarContext.Provider value={{ isExpanded, toggleNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};
