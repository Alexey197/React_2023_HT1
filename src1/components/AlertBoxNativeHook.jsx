import { useRef } from "react"
import styles from './AlertBox.module.css'
import { useInView } from 'react-intersection-observer'

function AlertBoxNativeHook({ children }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  })
  
  return <div 
    className={`alert alert-success ${styles.alert} ${inView ? styles.alertShowed : ''}`} 
    ref={ref}>
    {children}
  </div>
}

export default AlertBoxNativeHook