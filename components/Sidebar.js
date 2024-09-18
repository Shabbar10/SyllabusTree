"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import Next.js router

const Sidebar = ({ closeSidebar }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const router = useRouter(); // Initialize router

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Function to handle subject selection and route to the subject page
  const handleSubjectClick = (subject) => {
    // Redirect to the subject's page based on its name
    router.push(`/subject/${subject}`);
    closeSidebar(); // Close sidebar after selecting a subject
  };

  return (
    <div className="w-full h-screen bg-black text-white">
      <div className="w-40">
        <button onClick={closeSidebar} className="px-5 py-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={28}
            height={28}
            color={"#00f0ff"}
            fill={"none"}
          >
            <path
              d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <ul className="space-y-4">
          {/* SEM 2 Dropdown */}
          <li>
            <button
              onClick={() => toggleDropdown(1)}
              className="w-full flex items-center justify-between p-4"
            >
              <span>SEM 2</span>
              <span>{openDropdown === 1 ? "▲" : "▼"}</span>
            </button>
            {openDropdown === 1 && (
              <ul className="pl-4 space-y-2" style={{ color: "#01f7fa" }}>
                <li
                  className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                  onClick={() => handleSubjectClick("chem")}
                >
                  CHEM
                </li>
                <li
                  className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                  onClick={() => handleSubjectClick("ddca")}
                >
                  DDCA
                </li>
                <li
                  className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                  onClick={() => handleSubjectClick("dmgt")}
                >
                  DMGT
                </li>
                <li
                  className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                  onClick={() => handleSubjectClick("mech")}
                >
                  MECH
                </li>
                <li
                  className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                  onClick={() => handleSubjectClick("oop")}
                >
                  OOP
                </li>
              </ul>
            )}
          </li>

          {/* SEM 3 Dropdown */}
          <li>
            <button
              onClick={() => toggleDropdown(2)}
              className="w-full flex items-center justify-between p-4"
            >
              <span>SEM 3</span>
              <span>{openDropdown === 2 ? "▲" : "▼"}</span>
            </button>
            {openDropdown === 2 && (
              <ul className="pl-4 space-y-2" style={{ color: "#01f7fa" }}>
                <li
                  className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                  onClick={() => handleSubjectClick("dbms")}
                >
                  DBMS
                </li>
                <li
                  className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                  onClick={() => handleSubjectClick("fds")}
                >
                  FDS
                </li>
                <li
                  className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                  onClick={() => handleSubjectClick("mmc")}
                >
                  MMC
                </li>
                <li
                  className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                  onClick={() => handleSubjectClick("os")}
                >
                  OS
                </li>
              </ul>
            )}
          </li>

          {/* SEM 4 Dropdown */}
          <li>
            <button
              onClick={() => toggleDropdown(3)}
              className="w-full flex items-center justify-between p-4"
            >
              <span>SEM 4</span>
              <span>{openDropdown === 3 ? "▲" : "▼"}</span>
            </button>
            {openDropdown === 3 && (
              <ul className="pl-4 space-y-2" style={{ color: "#01f7fa" }}>
                <li
                  className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                  onClick={() => handleSubjectClick("ads")}
                >
                  ADS
                </li>
                <li
                  className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                  onClick={() => handleSubjectClick("cn")}
                >
                  CN
                </li>
                <li
                  className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                  onClick={() => handleSubjectClick("ps")}
                >
                  PS
                </li>
                <li
                  className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                  onClick={() => handleSubjectClick("sepm")}
                >
                  SEPM
                </li>
                <li
                  className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                  onClick={() => handleSubjectClick("daa")}
                >
                  DAA
                </li>
              </ul>
            )}
          </li>

          {/* SEM 5 Dropdown */}
          <li>
            <button
              onClick={() => toggleDropdown(4)}
              className="w-full flex items-center justify-between p-4"
            >
              <span>SEM 5</span>
              <span>{openDropdown === 4 ? "▲" : "▼"}</span>
            </button>
            {openDropdown === 4 && (
              <ul className="pl-4 space-y-2" style={{ color: "#01f7fa" }}>
                <li
                  className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                  onClick={() => handleSubjectClick("aies")}
                >
                  AIES
                </li>
                <li
                  className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                  onClick={() => handleSubjectClick("de")}
                >
                  DE
                </li>
                <li
                  className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                  onClick={() => handleSubjectClick("ics")}
                >
                  ICS
                </li>
                <li
                  className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                  onClick={() => handleSubjectClick("fsd")}
                >
                  FSD
                </li>
                <li
                  className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                  onClick={() => handleSubjectClick("bdt")}
                >
                  BDT
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
