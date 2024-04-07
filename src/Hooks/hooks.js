import { useDispatch, useSelector } from 'react-redux';
import React, { createContext, useContext, useState, useEffect } from 'react';

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

const ThemeContext = createContext();


const lightColor = {
    bg: '#e7e7e7',
    lightBG: 'rgba(255, 255, 255, 0.171)',
    bgGradient: 'linear-gradient(145deg, #1f1f1f, #252525)',
    boxShadowInto: 'inset 7px 7px 14px #8b8b8b, inset -7px -7px 14px #e2e2e2',
    boxShadowUp: `-1px -1px 3px 0px #f7f7f7, -1px -1px 2px 0px #f7f7f7,
            1px 1px 3px 0px #c7c7c7, 1px 1px 2px 0px #c7c7c7, inset 0px 0px 0px 0px #f7f7f7,
            inset 0px 0px 0px 0px #c7c7c7, inset 0px 0px 0px 0px #f7f7f7,
            inset 0px 0px 0px 0px #c7c7c7`,
    text: ''
    // 10px 10px 20px #c7c7c7, 
    // - 10px -10px 20px #ffffff;
}

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);


    const contextValue = { theme, lightColor, toggleTheme };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
