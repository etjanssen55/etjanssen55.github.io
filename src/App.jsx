


import Footer from "./components/footer.jsx"
import Header from "./components/header.jsx"
import Nav from "./components/nav.jsx"
import MovieList from "./components/movieList.jsx"
import ThemeSwitcher from "./components/ThemeSwitcher.jsx"
import { useEffect, useContext } from 'react'
import {ThemeContext} from './contexts/ThemeContext.jsx'
import SectionControls from "./components/sectionControls.jsx"
import { SectionControlContext } from "./contexts/SectionControlContext.jsx"



const pageLayout = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh"  // Full viewport height
}

const mainContent = {
  flex: 1,  // Takes up all remaining space
  padding: "20px"
}

const App = () => {

const { sectionControl, dispatch } = useContext(SectionControlContext)


const {theme} = useContext(ThemeContext)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div style={pageLayout}>
      <Header title="Ethan Janssen" tag="Welcome to my site!">
        <Nav />
      </Header>
      <ThemeSwitcher />
      <div className="mainContent" style={mainContent}>
        <button 
            onClick={() => dispatch({ type: 'TOGGLE_ABOUT'})}
            className="accordion"
        >
          <h1 style={{padding: "20px"}}>Hello There!</h1>
        </button>
        <div className={sectionControl.showAbout ? 'panelVisible' : 'panelHidden'}>
          <p>
            I'm Ethan. I'm a student at FVTC, a service delivery technician at National Guardian Life Insurance, and a board game designer, developer and publisher.
          </p>
        </div>
        <button 
            onClick={() => dispatch({ type: 'TOGGLE_FAVORITES'})}
            className="accordion"
        >
          <h1 style={{padding: "20px"}}>
           My Favorite Movies
          </h1>
        </button>
        <div className={sectionControl.showFavorites ? 'panelVisible' : 'panelHidden'}>
          <ul>
            <MovieList />
          </ul>
        </div>

        <button 
            onClick={() => dispatch({ type: 'TOGGLE_CONTACT'})}
            className="accordion"
        >
        <h1 style={{padding: "20px"}}>
          Contact
        </h1>
       </button>
        <div className={sectionControl.showContact ? 'panelVisible' : 'panelHidden'}>
          <p>Email: fakemail@notreal.com</p>
          <p>Phone: 555-5555</p>
        </div>
        <button 
            onClick={() => dispatch({ type: 'RESET'})}
        >Reset
       </button>
      </div>
      <Footer />
    </div>
  )
}

export default App