import { useState } from 'react'
import useFetch from '../hooks/useFetch.jsx'

const CatFacts = () => {

   const [reload, setReload ] = useState(0)

   const url = `https://catfact.ninja/fact?reload=${reload}`
   const { data, loading, error } = useFetch(url)

   return (
   <div>
      {data && data.fact}
      {loading && ' Loading cat facts...'}
      {error}
      <br/>
      <br/>
      <button onClick={() => setReload(r => r + 1)}>New Fact!</button>
   </div>
   )
}

export default CatFacts