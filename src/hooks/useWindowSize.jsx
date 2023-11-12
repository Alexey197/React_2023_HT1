import { useState, useEffect } from "react"

function getSizes() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}

export default function useWindowSize() {
  let  [sizes, setSizes ] = useState(getSizes())

  function applySizes() {
    setSizes(getSizes())
  }

  useEffect(() => {
    window.addEventListener('resize', applySizes)

    return () => window.removeEventListener('resize', applySizes)
  }, [])

  return sizes
}