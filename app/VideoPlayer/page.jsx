"use client";

import React from "react";
import VideoPlayer from "@/components/VideoPlayer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from 'next/navigation';

const VideoPlayerPage = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [recVids, setRecVids] = useState([]);
  const [props, setProps] = useState({});
  const searchParams = useSearchParams();

  useEffect(() => {
    // Set props based on URL parameters
    setProps({
      title: searchParams.get('title'),
      thumbnail: searchParams.get('thumbnail'),
      channel_title: searchParams.get('channel_title'),
      url: searchParams.get('url')
    });

    const fetchPred = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5001/similar", {
          method: "POST",
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
          body: JSON.stringify({ 'title': 'How to MAKE (and USE) Decision Tree Analysis in Excel' })
        });
        console.log("response", response);
        const result = await response.json();
        console.log(result['recommendation']);
        setRecommendations(result['recommendation']);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPred();
  }, [searchParams]);

  useEffect(() => {
    const fetchRecVideos = async () => {
      try {
        const response = await axios.post("/api/recommendations", { vids: recommendations });
        setRecVids(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecVideos();
  }, [recommendations]);

  return (
    <div>
      <VideoPlayer {...props} />
      {recommendations.map((e, index) => <h2 key={index}>{e}</h2>)}
    </div>
  );
};

export default VideoPlayerPage;
