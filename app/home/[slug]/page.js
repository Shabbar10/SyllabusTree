"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cards from "@/components/Cards";
import React from "react";
import { useAuth } from "@/app/context/AuthContext";

const home = ({ params }) => {
  const { slug } = params;
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/Signin"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // Optionally return a loading state or null
  }

  const data = {
    thumbnail: "https://i.ytimg.com/vi/XRcC7bAtL3c/maxresdefault.jpg",
    duration: "PT6M47S",
    title: "Lec-56: Preorder, Inorder and Postorder in 5 minute | Tree Traversal | Easiest and Shortest Trick",
    channel_name: "Gate Smashers",
    views: 1605569,
    timestamp: "2018-12-05T18:03:38Z"
  }

  return (
    <>
      <div className="w-full h-full absolute bg-black">
        <div className="flex flex-wrap gap-16 card_container relative top-28 left-10">
          <Cards{...data}/>
          <Cards{...data}/>
          <Cards{...data}/>
          <Cards{...data}/>
          <Cards{...data}/>
          <Cards{...data}/>
          <Cards{...data}/>
          <Cards{...data}/>
          <Cards{...data}/>
          <Cards{...data}/>
          <Cards{...data}/>
        </div>
      </div>
    </>
  );
};

export default home;
