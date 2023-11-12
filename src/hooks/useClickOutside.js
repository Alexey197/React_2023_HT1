import { useEffect } from "react";

export default function useClickOutside(ref, fn) {

  function clickHandler(e) {
    if(!ref.current.contains(e.target)) {
      fn()
    }
  }

  useEffect(() => {
    window.addEventListener('click', clickHandler)
    
    return () => {
      window.removeEventListener('click', clickHandler)
    }
  }, [ref, fn])
}