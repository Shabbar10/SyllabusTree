"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface SidebarProps {
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState<string | null>(null);

  const router = useRouter(); // Initialize router

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleNestedDropdown = (subject: string) => {
    setOpenNestedDropdown(openNestedDropdown === subject ? null : subject);
  };

  // Function to handle subject selection and route to the subject page
  const handleSubjectClick = (subject: string) => {
    // Redirect to the subject's page based on its name
    router.push(`/subject/${subject}`);
    closeSidebar(); // Close sidebar after selecting a subject
  };

  return (
    <div className="w-44 h-screen bg-black text-white">
      <div className="w-full">
        <button onClick={closeSidebar} className="px-5 py-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={28}
            height={28}
            color={"#ffffff"}
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
              className="w-full flex items-center justify-between p-4 hover:bg-[#7249e9]"
            >
              <span>SEM 2</span>
              <span>{openDropdown === 1 ? "▲" : "▼"}</span>
            </button>
            {openDropdown === 1 && (
              <ul className="pl-4 space-y-2" >
                <li>
                  <button className="w-full flex items-center justify-between"
                    onClick={() => toggleNestedDropdown("chem")}>
                    <span>
                      CHEM
                    </span>
                    <span>{openNestedDropdown === "chem" ? "▲" : "▼"}</span>
                  </button>
                  {openNestedDropdown === "chem" && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("chem1")}
                      >
                        unit 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("chem2")}
                      >
                        unit 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("chem3")}
                      >
                        unit 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("chem4")}
                      >
                        unit 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("chem5")}
                      >
                        unit 5
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("chem6")}
                      >
                        unit 6
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <button className="w-full flex items-center justify-between"
                    onClick={() => toggleNestedDropdown("ddca")}>
                    <span>
                      DDCA
                    </span>
                    <span>{openNestedDropdown === "ddca" ? "▲" : "▼"}</span>
                  </button>
                  {openNestedDropdown === "ddca" && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ddca1")}
                      >
                        unit 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ddca2")}
                      >
                        unit 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ddca3")}
                      >
                        unit 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ddca4")}
                      >
                        unit 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ddca5")}
                      >
                        unit 5
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <button className="w-full flex items-center justify-between"
                    onClick={() => toggleNestedDropdown("dmgt")}>
                    <span>
                      DMGT
                    </span>
                    <span>{openNestedDropdown === "dmgt" ? "▲" : "▼"}</span>
                  </button>
                  {openNestedDropdown === "dmgt" && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("dmgt1")}
                      >
                        unit 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("dmgt2")}
                      >
                        unit 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("dmgt3")}
                      >
                        unit 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("dmgt4")}
                      >
                        unit 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("dmgt5")}
                      >
                        unit 5
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("dmgt6")}
                      >
                        unit 6
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <button className="w-full flex items-center justify-between"
                    onClick={() => toggleNestedDropdown("mech")}>
                    <span>
                      MECH
                    </span>
                    <span>{openNestedDropdown === "mech" ? "▲" : "▼"}</span>
                  </button>
                  {openNestedDropdown === "mech" && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("mech1")}
                      >
                        unit 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("mech2")}
                      >
                        unit 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("mech3")}
                      >
                        unit 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("mech4")}
                      >
                        unit 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("mech5")}
                      >
                        unit 5
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("mech6")}
                      >
                        unit 6
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <button className="w-full flex items-center justify-between"
                    onClick={() => toggleNestedDropdown("oop")}>
                    <span>
                      OOP
                    </span>
                    <span>{openNestedDropdown === "oop" ? "▲" : "▼"}</span>
                  </button>
                  {openNestedDropdown === "oop" && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("oop1")}
                      >
                        unit 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("oop2")}
                      >
                        unit 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("oop3")}
                      >
                        unit 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("oop4")}
                      >
                        unit 4
                      </li>
                    </ul>
                  )}
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
              <ul className="pl-4 space-y-2" >
                <li>
                  <button className="w-full flex items-center justify-between"
                    onClick={() => toggleNestedDropdown("dbms")}>
                    <span>
                      DBMS
                    </span>
                    <span>{openNestedDropdown === "dbms" ? "▲" : "▼"}</span>
                  </button>
                  {openNestedDropdown === "dbms" && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("dbms1")}
                      >
                        unit 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("dbms2")}
                      >
                        unit 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("dbms3")}
                      >
                        unit 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("dbms4")}
                      >
                        unit 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("dbms5")}
                      >
                        unit 5
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <button className="w-full flex items-center justify-between"
                    onClick={() => toggleNestedDropdown("fds")}>
                    <span>
                      FDS
                    </span>
                    <span>{openNestedDropdown === "fds" ? "▲" : "▼"}</span>
                  </button>
                  {openNestedDropdown === "fds" && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("fds1")}
                      >
                        unit 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("fds2")}
                      >
                        unit 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("fds3")}
                      >
                        unit 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("fds4")}
                      >
                        unit 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("fds5")}
                      >
                        unit 5
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <button className="w-full flex items-center justify-between"
                    onClick={() => toggleNestedDropdown("mmc")}>
                    <span>
                      MMC
                    </span>
                    <span>{openNestedDropdown === "mmc" ? "▲" : "▼"}</span>
                  </button>
                  {openNestedDropdown === "mmc" && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("mmc1")}
                      >
                        unit 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("mmc2")}
                      >
                        unit 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("mmc3")}
                      >
                        unit 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("mmc4")}
                      >
                        unit 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("mmc5")}
                      >
                        unit 5
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <button className="w-full flex items-center justify-between"
                    onClick={() => toggleNestedDropdown("os")}>
                    <span>
                      OS
                    </span>
                    <span>{openNestedDropdown === "os" ? "▲" : "▼"}</span>
                  </button>
                  {openNestedDropdown === "os" && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("os1")}
                      >
                        unit 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("os2")}
                      >
                        unit 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("os3")}
                      >
                        unit 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("os4")}
                      >
                        unit 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("os5")}
                      >
                        unit 5
                      </li>
                    </ul>
                  )}
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
              <ul className="pl-4 space-y-2" >
                <li>
                  <button className="w-full flex items-center justify-between"
                    onClick={() => toggleNestedDropdown("ads")}>
                    <span>
                      ADS
                    </span>
                    <span>{openNestedDropdown === "ads" ? "▲" : "▼"}</span>
                  </button>
                  {openNestedDropdown === "ads" && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ads1")}
                      >
                        unit 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ads2")}
                      >
                        unit 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ads3")}
                      >
                        unit 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ads4")}
                      >
                        unit 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ads5")}
                      >
                        unit 5
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <button className="w-full flex items-center justify-between"
                    onClick={() => toggleNestedDropdown("cn")}>
                    <span>
                      CN
                    </span>
                    <span>{openNestedDropdown === "cn" ? "▲" : "▼"}</span>
                  </button>
                  {openNestedDropdown === "cn" && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("cn1")}
                      >
                        unit 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("cn2")}
                      >
                        unit 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("cn3")}
                      >
                        unit 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("cn4")}
                      >
                        unit 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("cn5")}
                      >
                        unit 5
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <button className="w-full flex items-center justify-between"
                    onClick={() => toggleNestedDropdown("ps")}>
                    <span>
                      PS
                    </span>
                    <span>{openNestedDropdown === "ps" ? "▲" : "▼"}</span>
                  </button>
                  {openNestedDropdown === "ps" && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ps1")}
                      >
                        unit 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ps2")}
                      >
                        unit 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ps3")}
                      >
                        unit 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ps4")}
                      >
                        unit 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ps5")}
                      >
                        unit 5
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <button className="w-full flex items-center justify-between"
                    onClick={() => toggleNestedDropdown("sepm")}>
                    <span>
                      SEPM
                    </span>
                    <span>{openNestedDropdown === "sepm" ? "▲" : "▼"}</span>
                  </button>
                  {openNestedDropdown === "sepm" && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("sepm1")}
                      >
                        unit 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("sepm2")}
                      >
                        unit 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("sepm3")}
                      >
                        unit 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("sepm4")}
                      >
                        unit 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("sepm5")}
                      >
                        unit 5
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <button className="w-full flex items-center justify-between"
                    onClick={() => toggleNestedDropdown("daa")}>
                    <span>
                      DAA
                    </span>
                    <span>{openNestedDropdown === "daa" ? "▲" : "▼"}</span>
                  </button>
                  {openNestedDropdown === "daa" && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("daa1")}
                      >
                        unit 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("daa2")}
                      >
                        unit 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("daa3")}
                      >
                        unit 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("daa4")}
                      >
                        unit 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("daa5")}
                      >
                        unit 5
                      </li>
                    </ul>
                  )}
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
              <ul className="pl-4 space-y-2" >
                <li>
                  <button className="w-full flex items-center justify-between"
                    onClick={() => toggleNestedDropdown("aies")}>
                    <span>
                      AIES
                    </span>
                    <span>{openNestedDropdown === "aies" ? "▲" : "▼"}</span>
                  </button>
                  {openNestedDropdown === "aies" && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("aies1")}
                      >
                        unit 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("aies2")}
                      >
                        unit 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("aies3")}
                      >
                        unit 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("aies4")}
                      >
                        unit 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("aies5")}
                      >
                        unit 5
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <button className="w-full flex items-center justify-between"
                    onClick={() => toggleNestedDropdown("de")}>
                    <span>
                      DE
                    </span>
                    <span>{openNestedDropdown === "de" ? "▲" : "▼"}</span>
                  </button>
                  {openNestedDropdown === "de" && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("de1")}
                      >
                        unit 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("de2")}
                      >
                        unit 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("de3")}
                      >
                        unit 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("de4")}
                      >
                        unit 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("de5")}
                      >
                        unit 5
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <button className="w-full flex items-center justify-between"
                    onClick={() => toggleNestedDropdown("ics")}>
                    <span>
                      ICS
                    </span>
                    <span>{openNestedDropdown === "ics" ? "▲" : "▼"}</span>
                  </button>
                  {openNestedDropdown === "ics" && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ics1")}
                      >
                        unit 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ics2")}
                      >
                        unit 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ics3")}
                      >
                        unit 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ics4")}
                      >
                        unit 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ics5")}
                      >
                        unit 5
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  className="hover:bg-gray-600 p-2 rounded cursor-pointer flex"
                  onClick={() => handleSubjectClick("fsd")}
                >
                  FSD
                </li>
                <li>
                  <button className="w-full flex items-center justify-between"
                    onClick={() => toggleNestedDropdown("bdt")}>
                    <span>
                      BDT
                    </span>
                    <span>{openNestedDropdown === "bdt" ? "▲" : "▼"}</span>
                  </button>
                  <span>{openNestedDropdown === "bdt" ? "▲" : "▼"}</span>
                  {openNestedDropdown === "bdt" && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("bdt1")}
                      >
                        unit 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("bdt2")}
                      >
                        unit 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("bdt3")}
                      >
                        unit 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("bdt4")}
                      >
                        unit 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("bdt5")}
                      >
                        unit 5
                      </li>
                    </ul>
                  )}
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
