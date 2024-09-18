"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { useAuth } from "@/app/context/AuthContext";
import Cards from "@/components/Cards";
import Navbar from "@/components/Navbar";


const Home = ({ params }) => {
  const { slug } = params;
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [showCards, setShowCards] = useState(false); // State to toggle visibility of card container
  const [showHome, setShowHome] = useState(true); // State to toggle visibility of card container

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/Login"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (showCards) {
      // First scroll action
      window.scrollTo({
        top: window.scrollY + window.innerHeight, // Scroll down by one viewport height
        behavior: "smooth",
      });
      setShowHome(false); // Hide home section
      
      // Delay for the second scroll action
      const timer = setTimeout(() => {
        window.scrollTo({
          top: window.scrollY - window.innerHeight, // Scroll down by one more viewport height
          behavior: "smooth",
        });
      }, 500); // Adjust the delay time as needed (in milliseconds)

      // Cleanup the timer if the component unmounts or `showCards` changes
      return () => clearTimeout(timer);
    }
  }, [showCards]); // Trigger scroll when showCards changes

  if (!isAuthenticated) {
    return null; // Optionally return a loading state or null
  }

  const handleGetStartedClick = () => {
    // Show cards after clicking the button
    setShowCards(true);
  };

  const data = {
    thumbnail: "https://i.ytimg.com/vi/XRcC7bAtL3c/maxresdefault.jpg",
    duration: "PT6M47S",
    title: "Lec-56: Preorder, Inorder and Postorder in 5 minutes | Tree Traversal | Easiest and Shortest Trick",
    channel_name: "Gate Smashers",
    views: 1605569,
    timestamp: "2018-12-05T18:03:38Z",
  };

  return (
    <>
      {/* Background section */}

      {showHome && (<div className="w-full h-screen flex justify-center items-center relative bg-[#b3d0e9]">
        <img
          src="/homeimage2.jpg"
          alt="Full Page Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <h1 className="z-10 text-7xl text-white font-bold absolute bottom-32 text-center">
          Hello {slug}
        </h1>
        <button
          className="z-10 text-xl bg-white p-2 text-black font-bold absolute bottom-16 rounded-lg text-center"
          onClick={handleGetStartedClick}
        >
          Let's Get Started
        </button>
      </div>)}

      {/* Cards section */}
      {showCards && (
        <>
        <Navbar/>
        <div className="flex flex-wrap gap-16 card_container px-5 py-32 bg-[#0f0f0f]">
          <Cards {...data} />
          <Cards {...data} />
          <Cards {...data} />
          <Cards {...data} />
          <Cards {...data} />
          <Cards {...data} />
          <Cards {...data} />
          <Cards {...data} />
          <Cards {...data} />
          <Cards {...data} />
        </div>
      </>
      )}
    </>
  );
};

export default Home;
