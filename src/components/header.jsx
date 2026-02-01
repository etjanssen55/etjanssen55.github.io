
const headerStyle = {
    fontFamily: "Sans-serif",
    backgroundColor: "var(--header-bg-color)",
    width: "100%",
    height: "150px",
    display: "flex",
    alignItems: "center"
}

const headerTitle = {
    color: "#d8d8d8",
    margin: "0",
    width: "33.33%",
    padding: "20px",
    textAlign: "left"
}

const tagline = {
    color: "#d8d8d8",
    margin: "0",
    width: "33.33%",
    padding: "20px",
    textAlign: "center"
}




import Nav from "./nav.jsx"
import {FaDice} from "react-icons/fa";

const Header = ({title, tag, children}) => {
    return (
        <>
            <div className="header" style={headerStyle}>
                
                <h1 className="headerTitle" style={headerTitle}>
                    <FaDice size={30} color={"#ffffff"}/> {title}
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