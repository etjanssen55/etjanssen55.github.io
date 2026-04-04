
import { useState, useEffect } from 'react'

const useFetch = url => {

    const [ data, setData ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)
    const [retry, setRetry] = useState(0)

    const refetch = () => setRetry(r => r + 1)

    useEffect(() => {

        (async() => {

            setLoading(true)
            setError(null)
            const response = await fetch(url)
            setLoading(false)

            if(!response.ok){
                setError(`Error: ${response.status}`)
                return
            }

            const json = await response.json()
            setData(json)
        })()

    }, [url, retry])

    return { data, loading, error, refetch }
}

export default useFetch