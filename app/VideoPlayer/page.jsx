"use client";

import React from "react";
import VideoPlayer from "@/components/VideoPlayer";

const VideoPlayerPage = () => {
    const { searchParams } = new URL(window.location.href);

    const props = {
        title: searchParams.get('title'),
        thumbnail: searchParams.get('thumbnail'),
        channel_title: searchParams.get('channel_title'),
        url: searchParams.get('url')
    };

    return <VideoPlayer {...props} />;
};

export default VideoPlayerPage;
