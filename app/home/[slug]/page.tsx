'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import Navbar2 from "../../../components/Navbar2";
import Cards from "../../../components/Cards";


// Define the type for component props
interface HomeProps {
  params: {
    slug: string;
  };
}

const Home = ({ params }: HomeProps) => {
  const { slug } = params;
  const state = typeof window !== 'undefined' ? localStorage.getItem('login') : null; // Make sure to check if the window object is defined
  const router = useRouter();
  const [showCards, setShowCards] = useState(false); // State to toggle visibility of card container
  const [showHome, setShowHome] = useState(true); // State to toggle visibility of home section

  useEffect(() => {
    if (!state || state === "false") {
      router.push("/Login"); // Redirect to login if not authenticated
    }
  }, [state, router]);

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

  const handleGetStartedClick = () => {
    setShowCards(true);
  };

  // Dummy data
  const data = {
    thumbnail: "https://i.ytimg.com/vi/XRcC7bAtL3c/maxresdefault.jpg",
    duration: "PT6M47S",
    title: "Lec-56: Preorder, Inorder and Postorder in 5 minutes | Tree Traversal | Easiest and Shortest Trick",
    channel_name: "Gate Smashers",
    views: "1605569",
    published: "2018-12-05T18:03:38Z",
    url: "https://www.youtube.com/watch?v=XRcC7bAtL3c",
    rating: 4.5
  };

  return (
    <>
      {/* Background section */}
      {showHome && (
        <div id="home" className="w-full h-screen flex justify-center items-center relative">
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
            Let&apos;s Get Started
          </button>
        </div>
      )}

      {/* Cards section */}
      {showCards && (
        <>
          <Navbar2 />
          <div className="flex flex-wrap gap-16 card_container px-5 py-32">
            {Array.from({ length: 6 }).map((_, index) => (
              <Cards key={index} {...data} />
            ))}
          </div>
        </>
      )}
    </>
  );
};
export default Home;
