
const navStyle = {
    width: "33.33%",
    textAlign: "right",
    padding: "20px",
}


const Nav = ({}) => {
    return (
            <div className="navigation" style={navStyle}>
                <a href="#">Home</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </div>
    )
}

export default Nav