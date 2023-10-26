import PropTypes from 'prop-types';
import AppProgress from './Progress'

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  step: PropTypes.func.isRequired
}

function TodoItem({ item, step }) {
  let { current, max, id, title } = item
  
  let rel = current / max
  
  let alertClasses = rel < 0.25 ? 'alert-danger' :
    rel < 0.75 ? 'alert-warning' :
      'alert-success'
  
  return <div className={`alert my-2 ${alertClasses}`}>
    <h2>{title} ({current} / {max})</h2>
    <div className="my-2">
      <AppProgress max={max} current={current} />
    </div>
    {rel < 1 ?
      <button onClick={() => step(id)} type="button" className="btn btn-primary">Make step</button> :
      <strong>Well Done</strong>
    }
    
  </div>
}

export default TodoItem