import {createContext, useReducer} from 'react'

export const SectionControlContext = createContext()

const initialState = {
    showAbout: true,
    showFavorites: true,
    showAPI: true,
    showContact: true
}

const sectionReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_ABOUT':
            return { ...state, showAbout: !state.showAbout }
        case 'TOGGLE_FAVORITES':
            return { ...state, showFavorites: !state.showFavorites }
        case 'TOGGLE_CONTACT':
            return { ...state, showContact: !state.showContact }
        case 'TOGGLE_CAT':
            return { ...state, showCAT: !state.showCAT}
        case 'TOGGLE_DOG':
            return { ...state, showDOG: !state.showDOG}
        case 'RESET':
            return initialState
        default:
            return state
    }
}

export const SectionControlProvider = ({children}) => {

    const [sectionControl, dispatch] = useReducer( sectionReducer, initialState)

    return(
        <SectionControlContext.Provider value={{sectionControl, dispatch}}>
            {children}
        </SectionControlContext.Provider>
    )
}