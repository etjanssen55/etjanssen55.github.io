import { useState, useRef, useEffect } from 'react'
import {FaRegSun, FaDesktop, FaRegMoon} from "react-icons/fa";

const iconSize = 20

const ThemeSwitcher = ({onThemeChange}) => {

const [activeButton, setActiveButton] = useState(null)

const lightRef = useRef(null)
const systemRef = useRef(null)
const darkRef = useRef(null)

useEffect(() => {
    const map = {
        light: lightRef,
        system: systemRef,
        dark: darkRef
    }
    const ref = map[activeButton]
    if(ref && ref.current) {
        ref.current.focus()
    }
}, [activeButton])

const handleClick = (theme) => {
    setActiveButton(theme)
    if(onThemeChange){
        onThemeChange(theme)
    }
}

    return (
   <>
    <div>
       <button 
            ref={lightRef}
            className={activeButton === 'light' ? 'theme-btn active' : 'theme-btn'}
            onClick={() => handleClick('light')}
            ><FaRegSun size={iconSize}/>
        </button>

        <button
            ref={systemRef}
            className={activeButton === 'system' ? 'theme-btn active' : 'theme-btn'}
            onClick={() => handleClick('system')}
            ><FaDesktop size={iconSize}/>
        </button>

        <button
            ref={darkRef} 
            className={activeButton === 'dark' ? 'theme-btn active' : 'theme-btn'}
            onClick={() => handleClick('dark')}
            ><FaRegMoon size={iconSize}/>
       </button>
    </div>
   </>
   )
}

export default ThemeSwitcher