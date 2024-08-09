import React from 'react';
import { useTheme } from "../../context/themeContext";

const ThemeToggleButton = () => {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="bg-primary-light dark:bg-primary-dark text-white p-2 rounded"
            >
            {darkMode ? 'Mode Clair' : 'Mode Sombre'}
        </button>
    );
};

export default ThemeToggleButton;