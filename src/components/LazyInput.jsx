import PropTypes from 'prop-types'
import {useEffect, useState, useRef} from 'react'

LazyInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired

}

function LazyInput({ value, onChange, ...otherProps }) {
  let [ innerValue, setInnerValue] = useState(value)
  let elem = useRef()
  let escMode = false

  useEffect(() => {
    setInnerValue(value)
  }, [ value ])

  function applyValue() {
    if (!escMode) {
      onChange(innerValue)
    }
  }

  function checkKey(e) {
    if (e.key === 'Enter') {
      applyValue()
    }
    else if (e.key === 'Escape') {
      setInnerValue(value)
      escMode = true
      elem.current.blur()
    }
  }

  return <input
    ref={elem}
    value={innerValue}
    onChange={e => setInnerValue(e.target.value)}
    onBlur={applyValue}
    onKeyUp={checkKey}
    {...otherProps}
  />
}

export default LazyInput
