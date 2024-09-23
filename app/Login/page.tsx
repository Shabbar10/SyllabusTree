"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";


const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true); // State to toggle between login and signup forms
  const [username, setUsername] = useState<string>(""); // Store username input
  const [password, setPassword] = useState<string>(""); // Store password input
  const router = useRouter();
  const { login } = useAuth(); // Access login method from AuthContext

  useEffect(() => {
    // On mount, set login to false if already authenticated
    const storedAuth = window.localStorage.getItem("login");
    if (storedAuth === "true") {
      window.localStorage.setItem("login", JSON.stringify(false));
      window.localStorage.setItem("username", JSON.stringify(null));
    }
  }, []);

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between login and signup forms
  };

  // Handle registration form submission
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/signup", { username, password });
      if (response.data.message === "success") {
        toggleForm(); // Switch to login after successful registration
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  // Handle login form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/signin", { username, password });
      if (response.data.message === "Success") {
        login(username); // Set login state
        router.push(`/home/${username}`); // Redirect to home page after login
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center relative bg-[#b3d0e9]">
      {/* Content Wrapper */}
      <div className="relative z-10 flex w-[80vw] h-[80vh] bg-opacity-75 bg-[url('/background.jpg')] bg-cover bg-center rounded-xl shadow-black shadow-2xl">
        {/* Tree Image */}
        <img
          className="hidden md:block h-full object-cover w-1/3 rounded-l-xl"
          src="/tree.jpg"
          alt="Tree"
        />

        {/* Form Container */}
        <div className="flex flex-col items-center justify-center w-2/3 gap-8">
          <div className={`transition-transform duration-500 ease-in-out transform w-72`}>
            {/* Sign Up Form */}
            {!isLogin && (
              <div className="w-full">
                <h2 className="text-2xl font-semibold mb-6 text-center text-white">Sign Up</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <input
                      required
                      className="bg-transparent shadow appearance-none border-b w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      required
                      className="bg-transparent shadow appearance-none border-b w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-[#1e568e] bg-opacity-75 hover:bg-[#2171c2] text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                <div className="flex justify-center space-x-2 text-white mt-4">
                  <p>Already have an account?</p>
                  <p className="font-bold cursor-pointer" onClick={toggleForm}>
                    Sign in
                  </p>
                </div>
              </div>
            )}

            {/* Sign In Form */}
            {isLogin && (
              <div className="w-full">
                <h2 className="text-2xl font-semibold mb-6 text-center text-white">Sign In</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      required
                      className="bg-transparent shadow appearance-none border-b w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      required
                      className="bg-transparent shadow appearance-none border-b w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-[#1e568e] bg-opacity-75 hover:bg-[#2171c2] text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
                <div className="flex justify-center space-x-2 text-white mt-4">
                  <p>New to SyllabusTree?</p>
                  <p className="font-bold cursor-pointer" onClick={toggleForm}>
                    Sign up now
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
