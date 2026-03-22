import { useContext } from 'react'
import { SectionControlContext } from "../contexts/SectionControlContext.jsx"

const SectionControls = () => {

    const { sectionControl, dispatch } = useContext(SectionControlContext)

return (
   <>
       <button 
            onClick={() => dispatch({ type: 'TOGGLE_ABOUT'})}
            className="accordion"
        >About
       </button>
        <div className={sectionControl.showAbout ? 'panelVisible' : 'panelHidden'}>
            <p>This is the About section</p>
        </div>
       <button 
            onClick={() => dispatch({ type: 'TOGGLE_FAVORITES'})}
            className="accordion"
        >Favorites
       </button>
        <div className={sectionControl.showFavorites ? 'panelVisible' : 'panelHidden'}>
            <p>This is the Favorites section</p>
        </div>
       <button 
            onClick={() => dispatch({ type: 'TOGGLE_CONTACT'})}
            className="accordion"
        >Contact
       </button>
        <div className={sectionControl.showContact ? 'panelVisible' : 'panelHidden'}>
            <p>This is the Contact section</p>
        </div>
        <button 
            onClick={() => dispatch({ type: 'RESET'})}
        >Reset
       </button>
   </>
   )
}

export default SectionControls