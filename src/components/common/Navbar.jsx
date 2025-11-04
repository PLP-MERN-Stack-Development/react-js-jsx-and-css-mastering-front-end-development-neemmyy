import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <nav className="bg-gray-200 dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Task Manager
        </h1>
        <a href="/" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">
          Home
        </a>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-gray-700 dark:bg-gray-300 text-white dark:text-gray-800 px-3 py-1 rounded-md"
      >
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
}
