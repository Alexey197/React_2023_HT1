import PropTypes from 'prop-types'
import {useEffect, useState} from 'react'

LazyInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired

}

function LazyInput({ value, onChange, ...otherProps }) {
  let [ innerValue, setInnerValue] = useState(value)

  useEffect(() => {
    setInnerValue(value)
  }, [ value ])

  function applyValue() {
    onChange(innerValue)
  }

  function checkKey(e) {
    if (e.key === 'Enter') {
      onChange(innerValue)
    }
  }

  return <input
    value={innerValue}
    onChange={e => setInnerValue(e.target.value)}
    onBlur={applyValue}
    onKeyUp={checkKey}
    {...otherProps}
  />
}

export default LazyInput
