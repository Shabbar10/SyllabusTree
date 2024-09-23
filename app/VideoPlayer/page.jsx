"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import axios from "axios";

const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"), { ssr: false });

const VideoPlayerContent = () => {
  const [recommendations, setRecommendations] = useState([]); // List of titles
  const [recVids, setRecVids] = useState([]); // List of documents from mongo
  const [props, setProps] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      // Set props from URL parameters
      setProps({
        title: searchParams.get('title'),
        thumbnail: searchParams.get('thumbnail'),
        channel_title: searchParams.get('channel_title'),
        url: searchParams.get('url')
      });

      // Fetch recommendations
      try {
        const response = await fetch("http://127.0.0.1:5001/similar", {
          method: "POST",
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
          body: JSON.stringify({ 'title': searchParams.get('title') || '' })
        });
        const result = await response.json();
        setRecommendations(result['recommendation']);

        // Fetch recommended videos
        const recVideosResponse = await axios.post("/api/recommendations", { vids: result['recommendation'] });
        setRecVids(recVideosResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [searchParams]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <VideoPlayer {...props} />
      {recommendations.map((e, index) => <h2 key={index}>{e}</h2>)}
      {/* You can also render recVids here if needed */}
    </div>
  );
};

const VideoPlayerPage = () => {
  return <VideoPlayerContent />;
};

export default VideoPlayerPage;
