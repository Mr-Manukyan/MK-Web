import { useDispatch, useSelector } from 'react-redux';
import React, { createContext, useContext, useState, useLayoutEffect } from 'react';

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

const ThemeContext = createContext();


const lightColor = {
    bg: '#e7e7e7',
    bgFooter: '#c2c2c281',
    lightBG: 'rgba(255, 255, 255, 0.171)',
    bgGradient: 'linear-gradient(145deg, #1f1f1f, #252525)',
    boxShadowInto: 'inset 7px 7px 14px #8b8b8b, inset -7px -7px 14px #e2e2e2',
    boxShadowUp: `-1px -1px 3px 0px #e2e2e2, -1px -1px 2px 0px #e2e2e2,
            1px 1px 3px 0px #8b8b8b, 1px 1px 2px 0px #8b8b8b, inset 0px 0px 0px 0px #e2e2e2,
            inset 0px 0px 0px 0px #8b8b8b, inset 0px 0px 0px 0px #e2e2e2,
            inset 0px 0px 0px 0px #8b8b8b`,
    controlBoxShadow: '1px 1px 2px #777777, -0.5px -0.5px 2px #bbbbbb',
    controlBG: 'linear-gradient(145deg, #cecece, #cacaca)',
    text: '#040404',
}


export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useLayoutEffect(() => {
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
