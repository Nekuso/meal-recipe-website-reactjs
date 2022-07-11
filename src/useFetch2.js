import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] =   useState(null)

    useEffect(() =>{
        setTimeout(() =>{
            // ====== TO START A VIRTUAL DB ======
            // npx json-server --watch data/db.json --port 8000
            fetch(url)
                .then(res => {
                    // console.log(res)
                    // Checks if it's response is okay or not
                    
                    if(!res.ok) {
                        throw Error('Could not fetch data for that resource')
                    }
                    return res.json()
                })
                // If Fetch Successful
                .then(data => {
                    setData(data.categories)
                    setIsPending(false)
                    setError(null)
                    // console.log(data)
                })
                // Catches and displays Final Error
                .catch(err => {
                    setIsPending(false)
                    setError(err.message)
                })
        }, 1000)

    },[url]);

    return {data, isPending, error}
}

export default useFetch