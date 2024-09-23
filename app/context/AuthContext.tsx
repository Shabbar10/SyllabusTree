'use client';
import { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Define the type for AuthContext
interface AuthContextType {
  username: string;
  login: (user: string) => void;
  logout: () => void;
}

// Create the context with a default value of `undefined`
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the type for AuthProvider props
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [username, setUsername] = useState<string>(""); // Store the username

  // On component mount, check window.localStorage for authentication state
  useEffect(() => {
    const storedAuth = window.localStorage.getItem('login');
    if (storedAuth === null) {
      // Set initial login state and username if not already set
      window.localStorage.setItem('login', JSON.stringify(false));
      window.localStorage.setItem('username', JSON.stringify(null));
    } else {
      const storedUsername = window.localStorage.getItem('username');
      if (storedUsername) {
        setUsername(JSON.parse(storedUsername));
      }
    }
  }, []);

  const login = (user: string) => {
    console.log(user)
    window.localStorage.setItem('login', JSON.stringify(true)); // Set login status to true
    window.localStorage.setItem('username', user); // Store the username in window.localStorage
    setUsername(user);
  };

  const logout = () => {
    window.localStorage.setItem('login', JSON.stringify(false)); // Set login status to false
    window.localStorage.removeItem('username'); // Remove the username from window.localStorage
    window.localStorage.removeItem('login');
    setUsername(""); // Clear the username
  };

  return (
    <AuthContext.Provider value={{ username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook for consuming the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
