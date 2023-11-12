import { useEffect } from "react";

export default function useClickOutside(html, callback) {

  function isClickOutSide(e) {
    return html.current.contains(e.target)
  }

  function isClickHere(e) {
  
    if(!isClickOutSide(e)) {
      callback()
    }
  }

  useEffect(() => {
    window.addEventListener('click', isClickHere)
    return () => window.removeEventListener('click', isClickHere)
  })
}