"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../app/context/AuthContext";

const Navbar2: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
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
    if (username) {
      // Assuming user.username is the slug
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
    return () => {
      document.body.style.overflow = "auto"; // Ensure scroll is restored
    };
  }, [sidebarOpen]);

  return (
    <div style={{ color: "black" }}>
      <header
        className={`px-5 header fixed top-0 flex justify-between bg-[#dbd7fb] bg-opacity-90 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75  ${sidebarOpen ? "z-0" : "z-10"
          } w-full`}
      >
        <div className="flex items-center relative top-1 gap-5">
          <button onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={28}
              height={28}
              fill={"none"}
              className={" text-gray-700 dark:text-white"}
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
          <img
            src="/logo_no_bg.png"
            alt="Logo"
            className="w-14 dark:bg-white rounded-full dark:bg-opacity-75"
          />
        </div>

        {/* Search Section */}
        <div className="flex items-center relative w-96">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 dark:bg-gray-950 dark:border-gray-950 dark:bg-opacity-75 bg-[#e6d4ed] bg-opacity-90 border-[#c4bfec] text-gray-700 dark:text-white rounded-l-full h-8 border-2 border-r-0   focus:outline-none focus:shadow-outline w-full py-4"
          // style={{ background: "#121212" }}
          />
          <button>
            <svg
              className="h-9 p-1 dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 bg-[#e6d4ed] bg-opacity-90 border-[#c4bfec] rounded-r-full text-gray-700 dark:text-white border-2 border-l-0  focus:outline-none focus:shadow-outline"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="search"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"

            // style={{ background: "#121212" }}
            >
              <path
                fill="currentColor"
                d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
              ></path>
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div className="relative">
          <nav className="text-gray-700 dark:text-white nav font-semibold text-lg py-5">
            <ul className="flex items-center gap-2">
              <li className="py-2 px-4 duration-200 cursor-pointer rounded-lg hover:bg-[#e4d4ee] dark:hover:bg-[#272727]">
                RECOMMENDED
              </li>
              <li className="py-2 px-4 duration-200 cursor-pointer rounded-lg dark:hover:bg-[#272727] hover:bg-[#e4d4ee]">
                NEW
              </li>
              <li
                className="py-2 px-4 duration-200 cursor-pointer rounded-lg dark:hover:bg-[#272727] hover:bg-[#e4d4ee]"
                onClick={handleReturn}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={28}
                  height={28}
                  className={" text-gray-700 dark:text-white"}
                  fill={"none"}
                >
                  <path
                    d="M12 17H12.009"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 8.5V13.5C20 17.2712 20 19.1569 18.8284 20.3284C17.6569 21.5 15.7712 21.5 12 21.5C8.22876 21.5 6.34315 21.5 5.17157 20.3284C4 19.1569 4 17.2712 4 13.5V8.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M22 10.5L17.6569 6.33548C14.9902 3.77849 13.6569 2.5 12 2.5C10.3431 2.5 9.00981 3.77849 6.34315 6.33548L2 10.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </li>
              <li
                className="py-2 px-4 duration-200 cursor-pointer rounded-lg dark:hover:bg-[#272727] hover:bg-[#e4d4ee]"
                onClick={handleLogout}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#ffffff"} fill={"none"} className={" text-gray-700 dark:text-white"}>
                  <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" strokeWidth="2" />
                </svg>
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

export default Navbar2;
