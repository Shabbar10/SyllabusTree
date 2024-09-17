"use client"

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/navigation';


const Signin = () => {
  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async(e)=>{
      e.preventDefault()
      const response = await axios.post('/api/signin', {username, password})
      if(response.data.message === "success")
      {
        router.push(`/home/${username}`)
      }
  }
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.hdqwalls.com/download/cyberpunk-city-future-digital-art-rq-1920x1080.jpg')" }}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-black bg-opacity-60 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign In</h2>
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
                className="bg-red-600 bg-opacity-75 hover:bg-red-800 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
            <div className="flex justify-center space-x-2">

            <p>New to XYZ?</p>
            <p className='font-bold'><Link href={"/Signup"}>Sign up now</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
