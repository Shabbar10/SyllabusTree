"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }
    // Cleanup the effect when the component unmounts or sidebarOpen changes
    return () => {
      document.body.style.overflow = "auto"; // Ensure scroll is restored
    };
  }, [sidebarOpen]);

  return (
    <div style={{ color: "#fbf006" }}>
      <header className="border-b header sticky top-0 bg-black shadow-md flex items-center justify-between">
        <div className="flex gap-5">
          <div className="relative ml-4">
            <button onClick={toggleSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={28}
                height={28}
                color={"#fbf006"}
                fill={"none"}
              >
                <path
                  d="M4 5L20 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12L20 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 19L20 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <img src="/public/logo.png" alt=""/>
          <h1 className="w-3/12 flex items-center">LOGO</h1>
        </div>

        <div className="flex space-x-40">
          {/* Search Section */}
          <div className="w-3/12 flex justify-end items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 text-white rounded-l-full h-8 focus:outline-none focus:shadow-outline"
              style={{ background: "#121212" }}
            />
            <button>
              <svg
                className="h-8 p-1 rounded-r-full"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="search"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{ background: "#121212" }}
              >
                <path
                  fill="currentColor"
                  d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                ></path>
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <nav className="nav font-semibold text-lg">
            <ul className="flex items-center">
              <li className="p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:text-white duration-200 cursor-pointer">
                <a href="">HOME</a>
              </li>
              <li className="p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:text-white duration-200 cursor-pointer">
                <a href="">TRENDING</a>
              </li>
              <li className="p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:text-white duration-200 cursor-pointer">
                <a href="">NEW</a>
              </li>

              {/* Image Upload Section */}
              <li className="p-4">
                <input
                  type="file"
                  className="w-10 h-10 rounded-full border border-gray-300 p-1"
                  accept="image/*"
                />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {sidebarOpen && (
      <div className={`z-1 inset-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in`}>
      <Sidebar />
    </div>
      )}
    </div>
  );
};

export default Navbar;
