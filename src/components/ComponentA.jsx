import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const ComponentA = React.memo(() => {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    console.log("ComponenteA renderizado");

    return (
        <div style={{
            background: isDarkMode ? '#333' : '#fff',
            color: isDarkMode ? '#fff' : '#000'
        }}>
           <p> O modo dark está {isDarkMode ? 'ativo' : 'desativado'}</p>
           <button onClick={toggleDarkMode}> Alterar Modo Escuro </button>
        </div>
    )
})


export default ComponentA;