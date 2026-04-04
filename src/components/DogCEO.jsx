import { useState } from 'react'
import useFetch from '../hooks/useFetch.jsx'

const DogCEO = () => {

   const [reload, setReload ] = useState(0)

   const url = `https://dog.ceo/api/breeds/image/random?reload=${reload}`
   const { data, loading, error, refetch } = useFetch(url)

   return (
   <div>
      <img src={data && data.message} style={{width: '400px', height: '400px', objectFit: 'cover', display: 'block'}} alt="Random dog image"></img>
      {loading && ' Fetching...'}
      {error && (
         <>
            <p>{error}</p>
            <button onClick={refetch}>Retry</button>
         </>
      )}
      <br/>
      <br/>
      <button onClick={() => setReload(r => r + 1)}>Fetch!</button>
   </div>
   )
}

export default DogCEO