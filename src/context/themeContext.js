import React, { createContext, useState, useEffect, useContext } from 'react';

// Créer le contexte
const ThemeContext = createContext();

    // Fournisseur de contexte pour envelopper l'application
export const ThemeProvider = ({ children }) => {
    const getSystemDefaultTheme = () => {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('darkMode');
        if (savedTheme !== null) {
        return savedTheme === 'true';
        } else {
        return getSystemDefaultTheme();
        }
    });

    useEffect(() => {
        if (darkMode) {
        document.documentElement.classList.add('dark');
        } else {
        document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    );
};

// Hook personnalisé pour utiliser le contexte
export const useTheme = () => {
    return useContext(ThemeContext);
};
