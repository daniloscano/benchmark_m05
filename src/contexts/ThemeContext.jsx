import {createContext, useEffect, useState} from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const getDefaultTheme = () => {
        const systemDefaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';

        return localStorage.getItem('theme') ?? systemDefaultTheme;
    }

    const [ theme, setTheme ] = useState(getDefaultTheme)

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [ theme ]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )

}