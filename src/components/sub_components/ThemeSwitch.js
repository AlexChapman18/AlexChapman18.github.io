// ----- Imports -----
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import React from "react";

const ThemeSwitch = () => {
    // Get the theme from local storage
    const selectedTheme = localStorage.getItem('theme');

    // Set the theme to the value from local storage
    const [isDarkMode, setDarkMode] = React.useState(selectedTheme === 'dark');
    document.querySelector('html').setAttribute('data-bs-theme', selectedTheme);

    // Toggle the theme
    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
        if (checked) {
            document.querySelector('html').setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.querySelector('html').setAttribute('data-bs-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
        />
    );
};

export default ThemeSwitch;