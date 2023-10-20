import PropTypes from 'prop-types';

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  changed: PropTypes.func.isRequired
}

export function Todo({ title, min, max, changed }) {
  let canInc = min < max
  
  function increase() {
    if (canInc) {
      changed(min + 1)
    } else console.log('max')
  }
  return (
    <>
      <div className='card card-todo p-3 m-3'>
        <p>{title}</p>
        <hr/>
        <strong>{min}/{max}</strong>
        <hr/>
        <div>
          <button className='btn btn-success' onClick={increase}>Make step</button>
        </div>
      </div>
    </>
  )
}