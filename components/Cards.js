"use client";
import React from "react";

const Cards = ({ thumbnail, duration, title, views }) => {
  return (
    <div className="w-[28vw] overflow-hidden shadow-lg">
      {/* Image container */}
      <div className="relative">
        <img
          className="w-full rounded"
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
        <div className="mt-2 flex flex-wrap items-center gap-2 text-gray-400 text-xs">
          {/* <p className="flex-shrink-0">{channel_name}</p> */}
          <p className="flex-shrink-0">{views}</p>
          {/* <p className="flex-shrink-0">{timestamp}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
