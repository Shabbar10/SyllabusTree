"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";
import Cards from "../../../components/Cards";


// Utility function to format video duration time
function formatTime(seconds: number): string {
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

// Define types for video data
interface Video {
  thumbnail: string;
  duration: number;
  title: string;
  views: string;
  channel_name: string;
  publishedAt: string;
  url: string;
  final_rating: number;
}

// Define the props for the Subject component
interface SubjectProps {
  params: {
    slug: string;
  };
}

const Subject: React.FC<SubjectProps> = ({ params }) => {
  const { slug } = params;
  const router = useRouter();
  const state = localStorage.getItem('login');
  const [videos, setVideos] = useState<Video[]>([]); // Type the videos array
  const [loading, setLoading] = useState<boolean>(true); // Boolean for loading state

  useEffect(() => {
    if (!state || state === "false") {
      console.log(state);
      router.push("/Login"); // Redirect to login if not authenticated
    }
  }, [state, router]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.post("/api/videos", { subject: slug });
        console.log(response.data);
        setVideos(response.data); // Set videos array
      } catch (error) {
        console.error("Could not fetch videos:", error);
      }
    };

    if (slug) {
      fetchVideos(); // Fetch videos if slug is defined
    }
  }, [slug]);

  useEffect(() => {
    const sendPython = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/query", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ subject: "DE" })
        });
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error("Error communicating with Python server:", error);
      }
    };

    sendPython(); // Send data to Python backend
  }, []);

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
                channel_name={video.channel_name}
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
  );
};

export default Subject;
