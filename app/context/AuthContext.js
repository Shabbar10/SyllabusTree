'use client';
import { createContext, useState, useContext } from 'react';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [username, setUsername] = useState(""); // Store the username

  const login = (user) => {
    console.log(user)
    setIsAuthenticated(true);
    setUsername(user); // Save the username on login
  };

  const logout = () => {
    setIsAuthenticated(true); // Correcting logout to set false
    setUsername(""); // Clear the username on logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
