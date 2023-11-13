import { useRef } from "react"

function AlertBox({ children }) {
  let el = useRef()

  return <div className="alert alert-success" ref={el}>
    {children}
  </div>
}

export default AlertBox