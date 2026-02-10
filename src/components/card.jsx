import { useState, useEffect } from 'react'
import StarRating from "./StarRating.jsx"

const cardStyle = {
    fontFamily: "Sans-serif",
    backgroundColor: "var(--card-bg-color)",
    border: "1px solid var(--card-border-color)",
    boxShadow: "0 2px 2px var(--card-shadow-color)",
    borderRadius: "8px",
    maxWidth: "500px",
    margin: "8px",
    cursor: 'pointer',
    color: "#faff9e",
    padding: "15px",
    margin: "15px"
}

const headerStyle = {
    textAlign: "center",
    margin: "0",
    padding: "4px",
    borderBottom: "1px solid var(--card-border-color)",
}

const Card = ({movie}) => {
return (
   <>
        <div className="card" style={cardStyle}>
            <h3 style={headerStyle}>
                {movie.title}
            </h3>
            <h2>{movie.director}</h2>
            <p>{movie.year} - {movie.genre}</p>
            <span>Rating: </span>
            <span style={{margin: "10px"}}><StarRating /></span>    
        </div>
   </>
   )
}

export default Card