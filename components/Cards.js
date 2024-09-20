"use client";
import { useRouter } from "next/router";
import React from "react";

const Cards = ({ thumbnail, duration, title, views, channel_title, published, url, rating }) => {
  const handleClick = () => {
    const urlSend = new URL(window.location.href);
    urlSend.pathname = '/VideoPlayer';
    urlSend.searchParams.set('title', title);
    urlSend.searchParams.set('thumbnail', thumbnail);
    urlSend.searchParams.set('duration', duration);
    urlSend.searchParams.set('views', views);
    urlSend.searchParams.set('channel_title', channel_title);
    urlSend.searchParams.set('published', published);
    urlSend.searchParams.set('url', url);

    window.open(urlSend.toString(), '_blank');
  };

  return (
    <div className="w-[28vw] overflow-hidden shadow-lg hover:cursor-pointer" onClick={handleClick}>
      {/* Image container */}
      <div className="relative">
        <img
          className="w-full rounded h-56"
          src={thumbnail}
          alt="Video Thumbnail"
        />
        {/* Duration span in the bottom right */}
        <span className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs p-1 rounded">
          {duration}
        </span>
      </div>

      {/* Video details */}
      <div className="p-2">
        {/* Title with truncation after 2 lines */}
        <h1 className="text-sm font-semibold line-clamp-2 leading-tight overflow-hidden whitespace-normal">
          {title}
        </h1>

        {/* Flex container for details */}
        <div className="mt-2 flex items-end justify-between text-gray-400 text-xs">
          <div className="flex flex-col">
            <p className="flex-shrink-0 text-base font-bold">{channel_title}</p>
            <p className="flex-shrink-0">{views} views</p>
          </div>
          <p className="flex-shrink-0">{published}</p>
          <p className="flex-shrink-0">Rating: {rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
