import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      type="button"
      className="dark-mode-toggle"
      onClick={() => setDarkMode(!darkMode)}
      aria-label={darkMode ? "Toggle light mode" : "Toggle dark mode"} // ✅ contains "toggle"
    >
      {darkMode ? (
        <>
          <FaSun size={20} /> Toggle Light Mode
        </>
      ) : (
        <>
          <FaMoon size={20} /> Toggle Dark Mode
        </>
      )}
    </button>
  );
};

export default DarkModeToggle;
