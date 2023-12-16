import PropTypes from "prop-types"
import { Link } from "react-router-dom"

E404.propTypes = {
  title: PropTypes.string
}

export default function E404({ title = 'Page not found' }) {
  return <div>
    <h1>{ title }</h1>
    <hr />
    <Link to="/">Try start from main page</Link>
  </div>
}