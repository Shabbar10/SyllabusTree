"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cards from "@/components/Cards";
import React from "react";
import { useAuth } from "@/app/context/AuthContext";

const Subject = ({ params }) => {
  const { slug } = params;
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/Login"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/fetchData'); // Use the new API route
        const data = await response.json();
        setVideos(data); // Save fetched data into state
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch videos:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!isAuthenticated) {
    return null; // Optionally return a loading state or null
  }

  // const data = {
  //   duration: "PT6M47S",
  //   title: "Lec-56: Preorder, Inorder and Postorder in 5 minute | Tree Traversal | Easiest and Shortest Trick",
  //   channel_name: "Gate Smashers",
  //   views: 1605569,
  //   timestamp: "2018-12-05T18:03:38Z"
  // }

  if (loading) {
    return <div>Loading..</div>;
  }

  const thumbnail = "https://i.ytimg.com/vi/XRcC7bAtL3c/maxresdefault.jpg";

  console.log(slug)

  return (
    <>
      <div className="w-full h-full absolute bg-black">
        <div className="flex flex-wrap gap-16 card_container relative top-28 left-10">
          {videos.length > 0 ? (
            videos.map((video, index) => (
              <Cards
                key={index}
                thumbnail={thumbnail}
                duration={video.duration}
                title={video.title}
                views={video.views}
              />
            ))
          ) : (
            <div>No videos found.</div> // Message when no videos are available
          )}
        </div>
      </div>
    </>
  )
}

export default Subject
