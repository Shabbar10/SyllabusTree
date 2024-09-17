"use client"

import { useState } from "react";

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="border-r w-40 h-screen bg-black text-white" style={{ color: "#fbf006" }}>
      <ul className="space-y-4">
        {/* First Dropdown */}
        <li>
          <button
            onClick={() => toggleDropdown(1)}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-700"
          >
            <span>SEM 2</span>
            <span>{openDropdown === 1 ? "▲" : "▼"}</span>
          </button>
          {openDropdown === 1 && (
            <ul className="pl-4 space-y-2" style={{ color: "#01f7fa" }}>
              <li className="hover:bg-gray-600 p-2 rounded">CHEM</li>
              <li className="hover:bg-gray-600 p-2 rounded">DDCA</li>
              <li className="hover:bg-gray-600 p-2 rounded">DMGT</li>
              <li className="hover:bg-gray-600 p-2 rounded">MECH</li>
              <li className="hover:bg-gray-600 p-2 rounded">OOP</li>
            </ul>
          )}
        </li>

        {/* Second Dropdown */}
        <li>
          <button
            onClick={() => toggleDropdown(2)}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-700"
          >
            <span>SEM 3</span>
            <span>{openDropdown === 2 ? "▲" : "▼"}</span>
          </button>
          {openDropdown === 2 && (
            <ul className="pl-4 space-y-2" style={{ color: "#01f7fa" }}>
              <li className="hover:bg-gray-600 p-2 rounded">DBMS</li>
              <li className="hover:bg-gray-600 p-2 rounded">FDS</li>
              <li className="hover:bg-gray-600 p-2 rounded">MMC</li>
              <li className="hover:bg-gray-600 p-2 rounded">OS</li>
            </ul>
          )}
        </li>

        {/* Third Dropdown */}
        <li>
          <button
            onClick={() => toggleDropdown(3)}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-700"
          >
            <span>SEM 4</span>
            <span>{openDropdown === 3 ? "▲" : "▼"}</span>
          </button>
          {openDropdown === 3 && (
            <ul className="pl-4 space-y-2" style={{ color: "#01f7fa" }}>
              <li className="hover:bg-gray-600 p-2 rounded">ADS</li>
              <li className="hover:bg-gray-600 p-2 rounded">CN</li>
              <li className="hover:bg-gray-600 p-2 rounded">PS</li>
              <li className="hover:bg-gray-600 p-2 rounded">SEPM</li>
              <li className="hover:bg-gray-600 p-2 rounded">DAA</li>
            </ul>
          )}
        </li>

        {/* Fourth Dropdown */}
        <li>
          <button
            onClick={() => toggleDropdown(4)}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-700"
          >
            <span>SEM 5</span>
            <span>{openDropdown === 4 ? "▲" : "▼"}</span>
          </button>
          {openDropdown === 4 && (
            <ul className="pl-4 space-y-2" style={{ color: "#01f7fa" }}>
              <li className="hover:bg-gray-600 p-2 rounded">AIES</li>
              <li className="hover:bg-gray-600 p-2 rounded">DE</li>
              <li className="hover:bg-gray-600 p-2 rounded">ICS</li>
              <li className="hover:bg-gray-600 p-2 rounded">FSD</li>
              <li className="hover:bg-gray-600 p-2 rounded">BDT</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
