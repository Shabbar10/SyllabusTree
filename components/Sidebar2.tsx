// Sidebar.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import Next.js router
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { navigationData, NavItem } from "./navigationData"; // Import navigation data

const variants: Variants = {
  "in-view": { x: "0px", transition: { type: "tween", ease: "easeOut", duration: 0.2} },
  "out-of-view": (index: number) => ({
    x: index > 0 ? "250px" : "-250px",
    transition: { type: "tween", ease: "easeOut", duration: 0.2},
  }),
};

const Sidebar = ({ closeSidebar }: { closeSidebar: () => void }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const router = useRouter(); // Initialize router

  const goToNextLevel = (item: NavItem) => {
    if (!item.links) {
      handleSubjectClick(item.send);
    } else {
      setSelectedItems([...selectedItems, item.id]);
    }
  };

  const goBack = () => {
    setSelectedItems(selectedItems.slice(0, -1));
  };

  const getNavItems = (selectedItems: string[]) => {
    let result = navigationData;
    for (let selectedItem of selectedItems) {
      const foundItem = result.find(item => item.id === selectedItem);
      result = foundItem?.links || [];
    }
    return result;
  };

  const handleSubjectClick = (subject: string) => {
    router.push(`/subject/${subject}`);
    closeSidebar();
  };

  // Close sidebar and reset to first level
  const handleCloseSidebar = () => {
    // setSelectedItems([]); // Reset to first level
    closeSidebar();
  };

  return (
    <aside className="fixed top-0 bottom-0 w-[250px] p-4 dark:dark:bg-[#1b192e] dark:text-white bg-[#dbd7fb] text-black transition-all duration-300 overflow-hidden text-xl">
      <div className="flex flex-col relative">
        <button
          className="[&>svg]:text-[32px] absolute right-0 top-0"
          onClick={handleCloseSidebar}
        >
          <FaChevronLeft />
        </button>
        <nav className="mt-24 relative">
          <motion.ul
            variants={variants}
            initial="in-view"
            animate={selectedItems.length > 0 ? "out-of-view" : "in-view"}
            custom={selectedItems.length > 0 ? -1 : 0}
            className="w-full duration-200 absolute top-0"
          >
            {getNavItems([]).map(item => (
              <li key={item.id} className="px-4 py-2">
                <button
                  onClick={() => goToNextLevel(item)}
                  className="flex flex-row items-center w-full"
                >
                  <span className="pr-2">{item.label}</span>
                  {item.links && <FaChevronRight />}
                </button>
              </li>
            ))}
          </motion.ul>
          <AnimatePresence>
            {selectedItems.length > 0 &&
              selectedItems.map((id, index) => (
                <motion.ul
                  key={id}
                  variants={variants}
                  initial="out-of-view"
                  animate={
                    index + 1 === selectedItems.length ? "in-view" : "out-of-view"
                  }
                  exit="out-of-view"
                  custom={index + 1 === selectedItems.length ? 1 : -1}
                  className="w-full duration-200 absolute top-0"
                >
                  <li className="pb-4">
                    <button className="flex items-center" onClick={goBack}>
                      <FaChevronLeft /> <span className="pl-2">Back</span>
                    </button>
                  </li>
                  {getNavItems(selectedItems.slice(0, index + 1)).map(item => (
                    <li key={item.id} className="px-4 py-2">
                      <button
                        onClick={() => goToNextLevel(item)}
                        className="flex flex-row items-center w-full"
                      >
                        <span className="pr-2">{item.label}</span>
                        {item.links && <FaChevronRight />}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              ))}
          </AnimatePresence>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
