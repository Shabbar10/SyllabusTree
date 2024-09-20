"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cards from "@/components/Cards";
import React from "react";
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
  // const { isAuthenticated } = useAuth();
  const router = useRouter();
  const state = localStorage.getItem('login');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!state || state === "false") {
      console.log(state)
      router.push("/Login"); // Redirect to login if not authenticated
    }
  }, []);

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

  useEffect(() => {
    const sendPython = async () => {
      try {
        // const response = await axios.post("http://127.0.0.1:5000/query", {})
        const response = await fetch("http://127.0.0.1:5000/query", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ 'subject': 'DE' }) })
        // console.log(response)
        const result = await response.json();
        console.log(result)
      } catch (error) {
        console.error(error)
      }
    }

    sendPython()
  }, [])


  const thumbnail = "https://i.ytimg.com/vi/XRcC7bAtL3c/maxresdefault.jpg";

  return (
    <>
      <div className="w-full h-fit absolute">
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
                rating={video.final_rating}
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
