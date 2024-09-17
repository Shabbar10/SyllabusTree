import React from "react";

const Cards = () => {
  return (
    <div className="w-[25vw] overflow-hidden shadow-lg">
      {/* Image container */}
      <div className="relative">
        <img
          className="w-full rounded"
          src="https://i.ytimg.com/vi/XRcC7bAtL3c/maxresdefault.jpg"
          alt="Video Thumbnail"
        />
        {/* Duration span in the bottom right */}
        <span className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs p-1 rounded">
          12:34
        </span>
      </div>
      
      {/* Video details */}
      <div className="p-2">
        {/* Title with truncation after 2 lines */}
        <h1 className="text-sm font-semibold line-clamp-2 leading-tight overflow-hidden whitespace-normal">
          Lec-56: Preorder, Inorder and Postorder in 5 minute | Tree Traversal | Easiest and Shortest Trick
        </h1>
        
        {/* Flex container for details */}
        <div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs">
          <p className="flex-shrink-0">Gate Smashers</p>
          <p className="flex-shrink-0">1.6M views</p>
          <p className="flex-shrink-0">3 years ago</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
