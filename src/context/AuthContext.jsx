import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem('isSRAdmin') === 'true';
  });

  const login = (password) => {
    // Hardcoded password for SR CARS
    if (password === 'SRADMIN2024') {
      setIsAdmin(true);
      localStorage.setItem('isSRAdmin', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isSRAdmin');
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
