import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Home,
  History,
  Filter,
  Sun,
  Moon
} from "lucide-react"; // Make sure you import the icons you need

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(false); // For toggling dark mode
  const navigate = useNavigate();

  // Your nav items with paths for React Router
  const menuItems = [
    { icon: Home, label: "Dashboard", id: "dashboard", path: "/dashboard" },
    { icon: History, label: "Result", id: "results", path: "/results" },
  ];

  const handleClick = (id, path) => {
    setActiveMenu(id);
    navigate(path);
  };

  return (
    // Fixed sidebar container
    <div className="w-64 h-full fixed bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-50 shadow-lg">
      {/* Top section with Filter Hub title and dark mode toggle */}
      <div className="p-6 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <Filter className="text-yellow-500 text-2xl" />
          <div>
            <div className="font-bold text-gray-800 dark:text-gray-100">Filter Hub</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              No Redundancy, Just Accuracy
            </div>
          </div>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      {/* Navigation buttons */}
      <nav className="py-5">
        {menuItems.map(({ icon: Icon, label, id, path }) => (
          <motion.button
            key={id}
            whileHover={{ x: 5 }}
            onClick={() => handleClick(id, path)}
            className={`w-full px-5 py-3 flex items-center gap-3 ${
              activeMenu === id
                ? "bg-blue-50 dark:bg-gray-700 border-l-4 border-yellow-500 text-yellow-500 font-medium"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            <Icon size={18} className={activeMenu === id ? "text-yellow-500" : ""} />
            {label}
          </motion.button>
        ))}
      </nav>

      {/* Bottom section with version info */}
      <div className="absolute bottom-0 w-full py-4 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        Filter Hub v1.0.0
      </div>
    </div>
  );
};

export default Navbar;
