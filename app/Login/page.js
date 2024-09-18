"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify"

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const [username_new, setUsername_new] = useState('')
  const [password_new, setPassword_new] = useState('')

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleRegister = async (e) => {
    e.preventDefault()
    const response = await axios.post('/api/signup', { username, password })
    if (response.data.message === "success") {
      toggleForm()
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/signin", { username, password });
    console.log(response.data.message)
    if (response.data.message === "success") {
      login(username);
      router.push(`/home/${username}`);
    }
  };

  return (
    <div className="bg-orange-600 w-full h-screen flex justify-center items-center" style={{ background: "url(/background.jpeg)" }}>
      <div className={`z-10 flex bg-[#18293a] w-[80vw] gap-40 items-center form-card rounded-xl ${isLogin ? "justify-end" : "justify-start"}`}>
        <div className={`w-72 signup-form ${isLogin ? "block" : "hidden"}`}>
          <h2 className="text-2xl font-semibold mb-6 text-center text-white">
            Sign Up
          </h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <input
                required={true}
                className="bg-transparent shadow appearance-none border-b w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                required={true}
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
            <div className="flex justify-center space-x-2 text-white">
              <p>Already have an account?</p>
              <p className="font-bold cursor-pointer" onClick={toggleForm}>Sign in</p>
            </div>
          </form>
        </div>

        <img className="h-[80vh] rounded-r-xl" src="/tree.jpg" alt="" />

        <div className={`w-72 login-form ${!isLogin ? "block" : "hidden"}`}>
          <h2 className="text-2xl font-semibold mb-6 text-center text-white">
            Sign In
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                required={true}
                className="bg-transparent shadow appearance-none border-b w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                required={true}
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
            <div className="flex justify-center space-x-2 text-white">
              <p>New to SyllabusTree?</p>
              <p className="font-bold cursor-pointer" onClick={toggleForm}>Sign up now</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
