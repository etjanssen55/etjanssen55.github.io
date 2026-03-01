
const headerStyle = {
    fontFamily: "Sans-serif",
    backgroundColor: "var(--header-bg-color)",
    width: "100%",
    height: "150px",
    display: "flex",
    alignItems: "center",
    transition: "background-color 0.3s ease"

}

const headerTitle = {
    color: "var(--text-color)",
    margin: "0",
    width: "33.33%",
    padding: "20px",
    textAlign: "left",
    transition: "color 0.3s ease"
}

const tagline = {
    color: "var(--text-color)",
    margin: "0",
    width: "33.33%",
    padding: "20px",
    textAlign: "center",
    transition: "color 0.3s ease"
}




import Nav from "./nav.jsx"
import {FaDice} from "react-icons/fa";

const Header = ({title, tag, children}) => {
    return (
        <>
            <div className="header" style={headerStyle}>
                
                <h1 className="headerTitle" style={headerTitle}>
                    <FaDice size={30} color={"var(--text-color)"}/> {title}
                </h1>
                <p className="tagline" style={tagline}>
                    {tag}
                </p>
                <div className="navigation" style={navigation}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Header