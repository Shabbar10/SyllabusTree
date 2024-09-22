"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from 'next/navigation';
import VideoPlayer from "@/components/VideoPlayer";
import axios from "axios";
import { useSearchParams } from 'next/navigation';

const VideoPlayerContent = () => {
  const [recommendations, setRecommendations] = useState([]); // List of titles
  const [recVids, setRecVids] = useState([]); // List of documents from mongo
  const [props, setProps] = useState({});
  const searchParams = useSearchParams();

  useEffect(() => {
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

const VideoPlayerPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VideoPlayerContent />
    </Suspense>
  );
};

export default VideoPlayerPage;
