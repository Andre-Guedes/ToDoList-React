import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState( null );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(res => {
        if(!res.ok) throw Error("Falha ao conectar ao banco de dados")
        return res.json()
      })
      .then( data => {
        setData(data)
        setLoading(false)
        setError(null)
      })
      .catch(err => {
        setLoading(false)
        setError(err.message)
      })
  }, []);

  return { data, loading, error}
}

export default useFetch
