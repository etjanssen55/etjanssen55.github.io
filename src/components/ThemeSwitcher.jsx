import { useState, useRef, useEffect, useContext } from 'react'
import {FaRegSun, FaDesktop, FaRegMoon} from "react-icons/fa";
import { ThemeContext } from '../contexts/ThemeContext.jsx'

const iconSize = 20

const ThemeSwitcher = () => {

    
const {theme, setTheme} = useContext(ThemeContext)


const handleClick = (theme) => {
    setTheme(theme)
}

    return (
   <>
    <div>
       <button 
            className={theme === 'light' ? 'theme-btn active' : 'theme-btn'}
            onClick={() => handleClick('light')}
            ><FaRegSun size={iconSize}/>
        </button>

        <button
            className={theme === 'system' ? 'theme-btn active' : 'theme-btn'}
            onClick={() => handleClick('system')}
            ><FaDesktop size={iconSize}/>
        </button>

        <button
            className={theme === 'dark' ? 'theme-btn active' : 'theme-btn'}
            onClick={() => handleClick('dark')}
            ><FaRegMoon size={iconSize}/>
       </button>
    </div>
   </>
   )
}

export default ThemeSwitcher