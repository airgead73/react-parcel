import { useEffect, useState} from 'react';
const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
        fetch(url)
        .then(response => {
          if(!response.ok) {
            throw Error('could not fetch the data for that resource')
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          console.log(err.message);
          setIsPending(false);
          setError(err.message);          
        })
    }, 1000);
    
  }, []);  

  return { data, isPending, error }

}

export default useFetch;