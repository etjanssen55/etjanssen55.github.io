import { useState, useEffect } from 'react'
import Card from './card.jsx'

const MovieList = () => {

const [movies, setMovies ] = useState([])
const [ isLoading, setIsLoading ] = useState(true)
const [ error, setError ] = useState(null)
const [ count, setCount ] = useState(0)

useEffect(() => {
    (async () => {
        try { 
            const url = 'data.json'
            const response = await fetch(url)
            if (!response.ok){
                throw new Error('Failed to fetch movies')
            }
            const data = await response.json()
            setMovies(data)
        }
        catch(err) {
            setError(err.message)
        }
        finally {
            setIsLoading(false)
        }
    })()
},[])


useEffect(() => {
    setCount(movies.length)
    document.title = `${count} Favorite Movies`;
}, [movies])

if(isLoading) return <div>Loading Movies...</div>
if(error) return <div style={{color: "#ff9696"}}>Error {error}</div>

return (
   <div>
        <ul>
            {movies.map(movie => (
                <Card key={movie.id} movie={movie}/>
            ))}
        </ul>
   </div>
   )
}

export default MovieList