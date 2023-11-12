import { Button } from "react-bootstrap"
import PropTypes from 'prop-types'
import { useRef } from "react"
import useClickOutside from "../hooks/useClickOutside"

MyModal.propTypes = {
  title: PropTypes.string.isRequired,
  showen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default function MyModal({ title, showen, onClose }) {
  let root = useRef()
  let classes = ['']

  if(!showen) {
    classes.push('d-none')
  }

  // function test() {
  //   console.log('normal');
  // }

  useClickOutside(root, onClose)

  return (
    <div className={classes.join(' ')} ref={root}>
      <h1>{title}</h1>
      <Button className='btn btn-danger' onClick={onClose}>
        Close
      </Button>
    </div>
  )
}