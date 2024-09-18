"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cards from "@/components/Cards";
import React from "react";
import { useAuth } from "@/app/context/AuthContext";
import axios from "axios";

function formatTime(seconds) {
    // Calculate hours, minutes, and seconds
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    // Format hours, minutes, and seconds as two-digit numbers
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = secs.toString().padStart(2, '0');

    // Return formatted time
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

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
    const fetchVideos = async () => {
      try {
        const response = await axios.post("/api/videos", { subject: slug });
        console.log(response.data)
        setVideos(response.data)
        // console.log(response.data); // List of videos
      } catch (error) {
        console.error("Could not fetch videos:", error);
      }
    };

    if (slug) {
      fetchVideos();
    }
  }, [slug]);

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

  const thumbnail = "https://i.ytimg.com/vi/XRcC7bAtL3c/maxresdefault.jpg";
  // const videosSlice = videos.slice(0, 9);

  return (
    <>
      <div className="w-full h-full absolute bg-black">
        <div className="flex flex-wrap gap-16 card_container relative top-28 left-10">
          {videos.length > 0 ? (
            videos.map((video, index) => (
              <Cards
                key={index}
                thumbnail={video.thumbnail}
                duration={formatTime(video.duration)}
                title={video.title}
                views={video.views}
                channel_title={video.channel_title}
                published={video.publishedAt}
                url={video.url}
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
