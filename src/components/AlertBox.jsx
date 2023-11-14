import { useRef } from "react"
import styles from './AlertBox.module.css'

function AlertBox({ children }) {
  let el = useRef()
  let opened = true

  return <div 
    className={`alert alert-success ${styles.alert} ${opened ? styles.alertShowed : ''}`} 
    ref={el}>
    {children}
  </div>
}

export default AlertBox