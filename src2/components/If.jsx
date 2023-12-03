import PropTypes from "prop-types"

If.prototype = {
  value: PropTypes.bool.isRequired
}

function If({ value, children }) {
  return value && children
}

export default If