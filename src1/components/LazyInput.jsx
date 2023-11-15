import PropTypes from 'prop-types'
import {useEffect, useState, useRef} from 'react'
import useWindowSize from '../hooks/useWindowSize'

LazyInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired

}

function LazyInput({ value, onChange, ...otherProps }) {
  let [ innerValue, setInnerValue] = useState(value)
  let elem = useRef()

  let windowSize = useWindowSize()

  useEffect(() => {
    setInnerValue(value)
  }, [ value ])

  function applyValue() {
    if (!elem.current.appEscapeMode) {
      onChange(innerValue)
    } else {
      delete elem.current.appEscapeMode
    }
  }

  function checkKey(e) {
    if (e.key === 'Enter') {
      applyValue()
    }
    else if (e.key === 'Escape') {
      setInnerValue(value)
      elem.current.appEscapeMode = true
      elem.current.blur()
    }
  }

  return <div>
    {windowSize.width} :
    {windowSize.height}
    <input
    ref={elem}
    value={innerValue}
    onChange={e => setInnerValue(e.target.value)}
    onBlur={applyValue}
    onKeyUp={checkKey}
    {...otherProps}
  />
  </div>
}

export default LazyInput
