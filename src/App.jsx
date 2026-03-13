


import Footer from "./components/footer.jsx"
import Header from "./components/header.jsx"
import Nav from "./components/nav.jsx"
import MovieList from "./components/movieList.jsx"
import ThemeSwitcher from "./components/ThemeSwitcher.jsx"
import { useEffect, useContext } from 'react'
import {ThemeContext} from './contexts/ThemeContext.jsx'

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
        <h1 style={{padding: "20px"}}>Hello There!</h1>
        <p>
          I'm Ethan. I'm a student at FVTC, a service delivery technician at National Guardian Life Insurance, and a board game designer, developer and publisher.
        </p>
        <h1 style={{padding: "20px"}}>
          My Favorite Movies
        </h1>
        <ul>
          <MovieList />
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default App