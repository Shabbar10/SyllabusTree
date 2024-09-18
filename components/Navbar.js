"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout, username } = useAuth(); // Assuming user has the username/slug
  const router = useRouter();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    if (!sidebarOpen) {
      window.scrollTo(0, 0);
    }
  };

  const handleLogout = () => {
    logout();
    router.push("/Login"); // Redirect to the login page after logout
  };

  const handleReturn = () => {
    if (username) {  // Assuming user.username is the slug
      router.push(`/home/${username}`);
    } else {
      console.error("No username found!");
    }
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
    <div style={{ color: "white" }}>
      <header
        className={`header fixed top-0 flex ${sidebarOpen ? "z-0" : "z-10"
          } w-full`}
        style={{
          boxShadow: "0 40px 20px black inset", // Adjust values as needed
        }}
      >
        <div className="flex items-center relative top-1 left-5">
          <button onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={28}
              height={28}
              color={"#00f0ff"}
              fill={"none"}
            >
              <path
                d="M4 5L20 5"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12L20 12"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 19L20 19"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center relative left-10 top-0.5">
          <h1 className="text-[#00f0ff] text-xl font-semibold">SyllabusTree</h1>
        </div>

        {/* Search Section */}
        <div className="flex items-center relative left-72 w-72">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 text-white rounded-l h-8 focus:outline-none focus:shadow-outline border-2 border-[#00f0ff] border-r-0 w-full py-4"
            style={{ background: "#121212" }}
          />
          <button>
            <svg
              className="h-9 p-1 rounded-r border-2 border-[#00f0ff] border-l-0"
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
        <div className="relative left-96">
          <nav className="text-white nav font-semibold text-lg py-5">
            <ul className="flex items-center bg-black bg-opacity-70 border border-[#fcee0a]">
              <li className="py-2 px-4 hover:text-black hover:bg-[#fcee0a] duration-200 cursor-pointer" onClick={handleReturn}>
                HOME
              </li>
              <li className="py-2 px-4 hover:text-black hover:bg-[#fcee0a] duration-200 cursor-pointer">
                RECOMMENDED
              </li>
              <li className="py-2 px-4 hover:text-black hover:bg-[#fcee0a] duration-200 cursor-pointer">
                NEW
              </li>
              <li
                className="py-2 px-4 bg-[#fcee0a] text-black duration-200 cursor-pointer"
                onClick={handleLogout}
              >
                LOG-OUT
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {sidebarOpen && (
        <div
          className={`z-1 inset-0 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-500 ease-in`}
        >
          <Sidebar closeSidebar={toggleSidebar} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
