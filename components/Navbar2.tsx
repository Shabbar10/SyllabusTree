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
        className={`px-5 header bg-[#0f0f0f] fixed top-0 flex justify-between ${sidebarOpen ? "z-0" : "z-10"
          } w-full`}
        style={{ backdropFilter: "blur(8)" }}
      >
        <div className="flex items-center relative top-1 gap-5">
          <button onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={28}
              height={28}
              color={"#ffffff"}
              fill={"none"}
            >
              <path
                d="M4 5L20 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12L20 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 19L20 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <img
            src="/logo_no_bg.png"
            alt="Logo"
            className="w-14 bg-white rounded-full bg-opacity-95"
          />
        </div>

        {/* Search Section */}
        <div className="flex items-center relative w-96">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 text-white rounded-l-full h-8 border-2 border-r-0 border-slate-800  focus:outline-none focus:shadow-outline w-full py-4"
            style={{ background: "#121212" }}
          />
          <button>
            <svg
              className="h-9 p-1 rounded-r-full text-white border-2 border-l-0 border-slate-800  focus:outline-none focus:shadow-outline"
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
        <div className="relative">
          <nav className="text-white nav font-semibold text-lg py-5">
            <ul className="flex items-center gap-2">
              <li className="py-2 px-4 duration-200 cursor-pointer rounded-lg hover:bg-[#272727]">
                RECOMMENDED
              </li>
              <li className="py-2 px-4 duration-200 cursor-pointer rounded-lg hover:bg-[#272727]">
                NEW
              </li>
              <li
                className="py-2 px-4 duration-200 cursor-pointer rounded-lg hover:bg-[#272727]"
                onClick={handleReturn}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={28}
                  height={28}
                  color={"#ffffff"}
                  fill={"none"}
                >
                  <path
                    d="M12 17H12.009"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 8.5V13.5C20 17.2712 20 19.1569 18.8284 20.3284C17.6569 21.5 15.7712 21.5 12 21.5C8.22876 21.5 6.34315 21.5 5.17157 20.3284C4 19.1569 4 17.2712 4 13.5V8.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M22 10.5L17.6569 6.33548C14.9902 3.77849 13.6569 2.5 12 2.5C10.3431 2.5 9.00981 3.77849 6.34315 6.33548L2 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </li>
              <li
                className="p-0.5 bg-red-600 rounded-full text-black duration-200 cursor-pointer"
                onClick={handleLogout}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={28}
                  height={28}
                  color={"#000000"}
                  fill={"none"}
                >
                  <path
                    d="M7.02331 5.5C4.59826 7.11238 3 9.86954 3 13C3 17.9706 7.02944 22 12 22C16.9706 22 21 17.9706 21 13C21 9.86954 19.4017 7.11238 16.9767 5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 2V10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
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
