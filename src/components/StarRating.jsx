
import {useState} from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'


const StarRating = ({ }) => {

    const [ rating, setRating] = useState(0)

    return(
        <span className="starRating">
            {[1, 2, 3, 4, 5].map((index) =>
            index <= rating
                ?<FaStar size={30} color={"white"} onClick={() => setRating(index)}/>
                :<FaRegStar size={30} color={"black"} onClick={() => setRating(index)}/>
            )}
        </span>
    )
}

export default StarRating