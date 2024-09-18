'use client'
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/navigation';


const Signup = () => {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const router = useRouter()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const response = await axios.post('/api/signup', {username, password})
        console.log(response.data.message)
        if(response.data.message === "success")
        {
          router.push(`/Signin`)
        }
    }

  return (

    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('signup.jpg')",
      }}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-black bg-opacity-60 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                required={true}
                className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                onChange={(e)=>setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                required={true}
                className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}

              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-600 bg-opacity-75 hover:bg-blue-800 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div>
            <div className="flex justify-center space-x-2">
              <p>Already have an account?</p>
              <p className="font-bold">
                <Link href={"/Signin"}>Sign in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
