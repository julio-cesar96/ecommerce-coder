import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    }

    const values = {
        isDarkMode,
        setIsDarkMode,
        toggleDarkMode
    }

    return <ThemeContext.Provider value={values}> {children} </ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider };