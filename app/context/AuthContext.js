'use client';
import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(""); // Store the username

  // On component mount, check localStorage for authentication state
  useEffect(() => {
    // Get the login state from localStorage, if not set, initialize to false
    const storedAuth = localStorage.getItem('login');
    if (storedAuth === null) {
       // Set state based on localStorage
       localStorage.setItem('login', JSON.stringify(false)); 
       localStorage.setItem('username', JSON.stringify(null));  
    }  

  }, []);

  const login = (user) => {
    localStorage.setItem('login', JSON.stringify(true)); // Set login status to true
    localStorage.setItem('username', user); // Store the username in localStorage
    setUsername(user);
  };

  const logout = () => {
    localStorage.setItem('login', JSON.stringify(false)); // Set login status to false
    localStorage.removeItem('username'); // Remove the username from localStorage
    localStorage.removeItem('login');
    setUsername(""); // Clear the username
  };

  return (
    <AuthContext.Provider value={{username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
