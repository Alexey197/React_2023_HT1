import PropTypes from 'prop-types';

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  changed: PropTypes.func.isRequired
}

export function Todo({ title, min, max, changed }) {
  console.log(min === max)
  let canInc = min < max
  
  const classes = min / max > 0.33 && min / max < 0.66 ? "card-todo__two-thirds" : min / max > 0.66 ? "card-todo__full" : "card-todo"
  
  function increase() {
    if (canInc) {
      changed(min + 1)
    } else console.log('max')
  }
  return (
    <>
      <div className={classes}>
        <p>{title}</p>
        <hr/>
        <div className='card p-2'></div>
        <strong>{min}/{max}</strong>
        <hr/>
        <div>
          <button className='btn btn-success' onClick={increase}>Make step</button>
        </div>
      </div>
    </>
  )
}