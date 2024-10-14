"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from 'next/navigation';
import axios from "axios";
import VideoPlayer from "../../components/VideoPlayer";

// Define the types for video props and recommendations
interface VideoProps {
  title: string;
  thumbnail: string;
  channel_name: string;
  url: string;
}

const VideoPlayerContent: React.FC = () => {
  const [recommendations, setRecommendations] = useState<string[]>([]); // List of titles
  const [recVids, setRecVids] = useState<any[]>([]); // List of documents from mongo, type 'any[]' for now
  const [props, setProps] = useState<VideoProps>({
    title: '',
    thumbnail: '',
    channel_name: '',
    url: ''
  });

  const searchParams = useSearchParams();

  useEffect(() => {
    // Extracting search params and setting video props with fallback values
    setProps({
      title: searchParams.get('title') ?? 'Untitled Video',
      thumbnail: searchParams.get('thumbnail') ?? '/default-thumbnail.jpg',
      channel_name: searchParams.get('channel_name') ?? 'Unknown Channel',
      url: searchParams.get('url') ?? 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // Default video URL
    });

    // Fetch similar video recommendations
    const fetchPred = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5001/similar", {
          method: "POST",
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
          body: JSON.stringify({ 'title': 'How to MAKE (and USE) Decision Tree Analysis in Excel' }) // Title can be dynamic
        });
        const result = await response.json();
        setRecommendations(result['recommendation']); // Set recommendations list
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };
    fetchPred();
  }, [searchParams]);

  useEffect(() => {
    // Fetch recommendation videos from the server
    const fetchRecVideos = async () => {
      if (recommendations.length > 0) {
        try {
          const response = await axios.post("/api/recommendations", { vids: recommendations });
          setRecVids(response.data); // Set the video documents
        } catch (error) {
          console.error("Error fetching recommended videos:", error);
        }
      }
    };
    fetchRecVideos();
  }, [recommendations]);

  return (
    <div>
      {/* Video Player Component with non-null props */}
      <VideoPlayer {...props}/>
      
      {/* Display Recommended Titles */}
      {recommendations.length > 0 ? (
        recommendations.map((rec, index) => (
          <h2 key={index}>{rec}</h2>
        ))
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

const VideoPlayerPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VideoPlayerContent />
    </Suspense>
  );
};

export default VideoPlayerPage;
