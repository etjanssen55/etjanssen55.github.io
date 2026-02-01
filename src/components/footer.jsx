
const footerStyle = {
    fontFamily: "Sans-serif",
    backgroundColor: "var(--header-bg-color)",
    width: "100%",
    height: "75px",
    display: "flex",
    alignItems: "center"
}

const copyright = {
    color: "#d8d8d8",
    margin: "0",
    width: "33.33%",
    padding: "20px",
    textAlign: "left"
}

const socialMedia = {
    color: "#d8d8d8",
    margin: "0",
    width: "33.33%",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer"
}

import {FaFacebook} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";


const Footer = ({}) => {
    return (
        <>
            <div className="footer" style={footerStyle}>
                <p className="copyright" style={copyright}>
                    Copyright Janssen inc. 2026
                </p>
                <div className="socialMedia" style={socialMedia}>
                    <FaFacebook size={20} color={"#ffffff"} style={{padding: "10px"}}/>
                    <FaLinkedin size={20} color={"#ffffff"} style={{padding: "10px"}}/>
                    <FaTwitter size={20} color={"#ffffff"} style={{padding: "10px"}}/>
                </div>
            </div>
            
        </>
    )
}

export default Footer