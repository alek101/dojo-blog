import { useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] =useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();

        setTimeout(()=>{
            fetch(url, {signal: abortCont.signal})
            .then(res => {
                // console.log(res);
                if(!res.ok){
                    throw Error(`Couldn't fetch the data`);
                }
                return res.json()
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err =>{
                if (err.name === 'AbortError')
                {
                    console.log('Fetch aborted');
                }
                else
                {
                    setIsPending(false);
                    setError(err.message);
                }
            })
        },10)
        

        return () =>abortCont.abort();
    }, [url]);
    //added [url] so it would rerender on url change, not sure if [] would work as well

    return {data, isPending, error}
}

export default useFetch;