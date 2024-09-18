"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import Next.js router

const Sidebar = ({ closeSidebar }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null);

  const router = useRouter(); // Initialize router

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleNestedDropdown = (subject) => {
    setOpenNestedDropdown(openNestedDropdown === subject ? null : subject);
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
                  className="p-2 rounded cursor-pointer"
                  onClick={() => toggleNestedDropdown("chem")}
                >
                  CHEM
                  {openNestedDropdown === 'chem' && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("chem1")}
                      >
                        chem 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("chem2")}
                      >
                        chem 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("chem3")}
                      >
                        chem 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("chem4")}
                      >
                        chem 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("chem5")}
                      >
                        chem 5
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("chem6")}
                      >
                        chem 6
                      </li>
                      </ul>)}
                </li>
                <li
                  className="p-2 rounded cursor-pointer"
                  onClick={() => toggleNestedDropdown("ddca")}
                >
                  DDCA
                  {openNestedDropdown === 'ddca' && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ddca1")}
                      >
                        ddca 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ddca2")}
                      >
                        ddca 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ddca3")}
                      >
                        ddca 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ddca4")}
                      >
                        ddca 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ddca5")}
                      >
                        ddca 5
                      </li>
                      </ul>)}
                </li>
                <li
                  className=" p-2 rounded cursor-pointer"
                  onClick={() => toggleNestedDropdown("dmgt")}
                >
                  DMGT
                  {openNestedDropdown === 'dmgt' && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("dmgt1")}
                      >
                        dmgt 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("dmgt2")}
                      >
                        dmgt 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("dmgt3")}
                      >
                        dmgt 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("dmgt4")}
                      >
                        dmgt 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("dmgt5")}
                      >
                        dmgt 5
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("dmgt6")}
                      >
                        dmgt 6
                      </li>
                      </ul>)}
                </li>
                <li
                  className=" p-2 rounded cursor-pointer"
                  onClick={() => toggleNestedDropdown("mech")}
                >
                  MECH
                  {openNestedDropdown === 'mech' && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("mech1")}
                      >
                        mech 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("mech2")}
                      >
                        mech 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("mech3")}
                      >
                        mech 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("mech4")}
                      >
                        mech 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("mech5")}
                      >
                        mech 5
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("mech6")}
                      >
                        mech 6
                      </li>
                      </ul>)}
                </li>
                <li
                  className=" p-2 rounded cursor-pointer"
                  onClick={() => toggleNestedDropdown("oop")}
                >
                  OOP
                  {openNestedDropdown === 'oop' && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("oop1")}
                      >
                        oop 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("oop2")}
                      >
                        oop 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("oop3")}
                      >
                        oop 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("oop4")}
                      >
                        oop 4
                      </li>
                      </ul>)}
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
                  className=" p-2 rounded cursor-pointer"
                  onClick={() => toggleNestedDropdown("dbms")}
                >
                  DBMS
                  {openNestedDropdown === 'dbms' && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("dbms1")}
                      >
                        dbms 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("dbms2")}
                      >
                        dbms 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("dbms3")}
                      >
                        dbms 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("dbms4")}
                      >
                        dbms 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("dbms5")}
                      >
                        dbms 5
                      </li>
                      </ul>)}
                </li>
                <li
                  className=" p-2 rounded cursor-pointer"
                  onClick={() => toggleNestedDropdown("fds")}
                >
                  FDS
                  {openNestedDropdown === 'fds' && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("fds1")}
                      >
                        fds 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("fds2")}
                      >
                        fds 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("fds3")}
                      >
                        fds 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("fds4")}
                      >
                        fds 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("fds5")}
                      >
                        fds 5
                      </li>
                      </ul>)}
                </li>
                <li
                  className=" p-2 rounded cursor-pointer"
                  onClick={() => toggleNestedDropdown("mmc")}
                >
                  MMC
                  {openNestedDropdown === 'mmc' && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("mmc1")}
                      >
                        mmc1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("mmc2")}
                      >
                        mmc2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("mmc3")}
                      >
                        mmc3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("mmc4")}
                      >
                        mmc4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("mmc5")}
                      >
                        mmc5
                      </li>
                      </ul>)}
                </li>
                <li
                  className=" p-2 rounded cursor-pointer"
                  onClick={() => toggleNestedDropdown("os")}
                >
                  OS
                  {openNestedDropdown === 'os' && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("os1")}
                      >
                        os 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("os2")}
                      >
                        os 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("os3")}
                      >
                        os 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("os4")}
                      >
                        os 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("os5")}
                      >
                        os 5
                      </li>
                      </ul>)}
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
                  className="p-2 rounded cursor-pointer"
                  onClick={() => toggleNestedDropdown("ads")}
                >
                  ADS
                  {openNestedDropdown === 'ads' && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ads1")}
                      >
                        ads 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ads2")}
                      >
                        ads 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ads3")}
                      >
                        ads 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ads4")}
                      >
                        ads 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ads5")}
                      >
                        ads 5
                      </li>
                      </ul>)}
                </li>
                <li
                  className=" p-2 rounded cursor-pointer"
                  onClick={() => toggleNestedDropdown("cn")}
                >
                  CN
                  {openNestedDropdown === 'cn' && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("cn1")}
                      >
                        cn 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("cn2")}
                      >
                        cn 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("cn3")}
                      >
                        cn 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("cn4")}
                      >
                        cn 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("cn5")}
                      >
                        cn 5
                      </li>
                      </ul>)}
                </li>
                <li
                  className=" p-2 rounded cursor-pointer"
                  onClick={() => toggleNestedDropdown("ps")}
                >
                  PS
                  {openNestedDropdown === 'ps' && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ps1")}
                      >
                        ps 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ps2")}
                      >
                        ps 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ps3")}
                      >
                        ps 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ps4")}
                      >
                        ps 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ps5")}
                      >
                        ps 5
                      </li>
                      </ul>)}
                </li>
                <li
                  className=" p-2 rounded cursor-pointer"
                  onClick={() => toggleNestedDropdown("sepm")}
                >
                  SEPM
                  {openNestedDropdown === 'sepm' && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("sepm1")}
                      >
                        sepm 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("sepm2")}
                      >
                        sepm 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("sepm3")}
                      >
                        sepm 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("sepm4")}
                      >
                        sepm 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("sepm5")}
                      >
                        sepm 5
                      </li>
                      </ul>)}
                </li>
                <li
                  className=" p-2 rounded cursor-pointer"
                  onClick={() => toggleNestedDropdown("daa")}
                >
                  DAA
                  {openNestedDropdown === 'daa' && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("daa1")}
                      >
                        daa 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("daa2")}
                      >
                        daa 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("daa3")}
                      >
                        daa 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("daa4")}
                      >
                        daa 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("daa5")}
                      >
                        daa 5
                      </li>
                      </ul>)}
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
                  className=" p-2 rounded cursor-pointer"
                  onClick={() => toggleNestedDropdown("aies")}
                >
                  AIES
                  {openNestedDropdown === 'aies' && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("aies1")}
                      >
                        aies 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("aies2")}
                      >
                        aies 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("aies3")}
                      >
                        aies 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("aies4")}
                      >
                        aies 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("aies5")}
                      >
                        aies 5
                      </li>
                      </ul>)}
                </li>
                <li
                  className=" p-2 rounded cursor-pointer"
                  onClick={() => toggleNestedDropdown("de")}
                >
                  DE
                  {openNestedDropdown === 'de' && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("de1")}
                      >
                        de 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("de2")}
                      >
                        de 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("de3")}
                      >
                        de 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("de4")}
                      >
                        de 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("de5")}
                      >
                        de 5
                      </li>
                      </ul>)}
                </li>
                <li
                  className=" p-2 rounded cursor-pointer"
                  onClick={() => toggleNestedDropdown("ics")}
                >
                  ICS
                  {openNestedDropdown === 'ics' && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ics1")}
                      >
                        ics 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ics2")}
                      >
                        ics 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ics3")}
                      >
                        ics 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ics4")}
                      >
                        ics 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("ics5")}
                      >
                        ics 5
                      </li>
                      </ul>)}
                </li>
                <li
                  className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                  onClick={() => handleSubjectClick("fsd")}
                >
                  FSD
                </li>
                <li
                  className=" p-2 rounded cursor-pointer"
                  onClick={() => toggleNestedDropdown("bdt")}
                >
                  BDT
                  {openNestedDropdown === 'bdt' && (
                    <ul className="pl-4 space-y-2">
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("bdt1")}
                      >
                        bdt 1
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("bdt2")}
                      >
                        bdt 2
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("bdt3")}
                      >
                        bdt 3
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("bdt4")}
                      >
                        bdt 4
                      </li>
                      <li
                        className="hover:bg-gray-600 p-2 rounded cursor-pointer"
                        onClick={() => handleSubjectClick("bdt5")}
                      >
                        bdt 5
                      </li>
                      </ul>)}
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
