"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import axios from "axios";
import Cards from "../../components/Cards";


const VideoPlayer = dynamic(() => import("../../components/VideoPlayer"), { ssr: false });

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = secs.toString().padStart(2, '0');
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

const VideoPlayerContent = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [recVids, setRecVids] = useState([]);
  const [props, setProps] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();

  const fetchRecommendations = useCallback(async () => {
    setIsLoading(true);
    setProps({
      title: searchParams.get('title'),
      thumbnail: searchParams.get('thumbnail'),
      channel_title: searchParams.get('channel_title'),
      url: searchParams.get('url')
    });

    try {
      const response = await fetch("http://127.0.0.1:5001/similar", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ 'title': searchParams.get('title') || '' })
      });
      const result = await response.json();
      console.log("Recommendations fetched:", result['recommendation']);
      setRecommendations(result['recommendation']);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
    setIsLoading(false);
  }, [searchParams]);

  useEffect(() => {
    fetchRecommendations();
  }, [fetchRecommendations]);

  useEffect(() => {
    const fetchRecVideos = async () => {
      if (recommendations.length > 0) {
        try {
          const recVideosResponse = await axios.post("/api/recommendations", { vids: recommendations });
          console.log("API response for recVids:", recVideosResponse.data);
          setRecVids(recVideosResponse.data);
        } catch (error) {
          console.error("Error fetching recVids:", error);
        }
      }
    };

    fetchRecVideos();
  }, [recommendations]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log("Rendering with recVids:", recVids);

  return (
    <div>
      <VideoPlayer {...props} />
      {recommendations.map((e, index) => <h2 key={index}>{e}</h2>)}
      {recVids.length > 0 ? (
        recVids.map((video, index) => {
          // console.log("Rendering Card with video:", video);
          // console.log("Rendering Card with video 0:", video[0]);
          return (
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
          );
        })
      ) : (
        <div>Can't load cards</div>
      )}
    </div>
  );
};

const VideoPlayerPage = () => {
  return <VideoPlayerContent />;
};

export default VideoPlayerPage;
