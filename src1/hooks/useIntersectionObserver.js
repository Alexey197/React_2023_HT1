import { useEffect, useState } from "react";

export default function useIntersectionObserver(elRef, rootMargin = '0px', onlyFirstShow = false) {

  const [entry, setEntry ] = useState(null)

  useEffect(() => {
    if(!(elRef.current instanceof HTMLElement)) {
      return
    }
    const observer = new IntersectionObserver(
      ([ entry ]) => { setEntry(entry);},
      { rootMargin }
    )

    observer.observe(elRef.current)

    return () => observer.disconnect()
    
  }, [])

  return entry
}