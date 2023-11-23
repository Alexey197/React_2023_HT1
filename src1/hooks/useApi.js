// import { useState, useEffect, useContext } from "react";
// import { }

// export default function useApi(key, ...args) {
//   let [ done, setDone ] = useState(false)
//   let [ data, setData ] = useState(null)
//   let [ error, setError ] = useState(null)

//   useEffect(() => {
//     fetch(url, options)
//       .then(response => response.text())
//       .then(text => setData(text))
//       .catch(e => setError(e))
//       .finally(() => setDone(true))
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   return { done, data, error }
// }