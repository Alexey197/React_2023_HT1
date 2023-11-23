import { useRef } from "react"
import styles from './AlertBox.module.css'
import useIntersectionObserver from "../hooks/useIntersectionObserver"

function AlertBox({ children }) {
  let el = useRef()
  let observer = useIntersectionObserver(el, '-200px')

  // console.log(observer);

  return <div 
    className={`alert alert-success ${styles.alert} ${observer?.isIntersecting ? styles.alertShowed : ''}`} 
    ref={el}>
    {children}
  </div>
}

export default AlertBox