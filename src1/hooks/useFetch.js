 import { useState, useEffect } from "react";

 export default function useFetch(url, options = {}) {
  let [ done, setDone ] = useState(true)
  let [ data, setData ] = useState(null)
  let [ error, setError ] = useState(null)

  useEffect(() => {
    fetch(url, options)
      .then(response => {
        return response.text()
      })
      .then(data => {
        setData(data)
      })
      .catch(e => setError(e))
      .finally(() => setDone(true))
  }, [])

  return { done, data, error }
 }