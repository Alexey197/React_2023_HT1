import PropTypes from 'prop-types';

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  changed: PropTypes.func.isRequired,
  showed: PropTypes.bool.isRequired,
}

export function Todo({ showed, title, min, max, changed }) {
  let canInc = min < max
  
  // current = min
  
  const classes = min / max > 0.33 && min / max < 0.66 ?
    "card-todo__two-thirds" : min / max > 0.66 ?
      "card-todo__full" :
      "card-todo"
  const className = `${classes} m-3 p-2`
  
  function increase() {
    if (canInc) {
      changed(min + 1)
    } else console.log('max')
  }
  
  const levelWidth = `${min / max * 100}%`
  
  const divStyle = {
    height: '15px',
    width: levelWidth,
    backgroundColor: 'red',
    background: 'red'
  }
  
  const itemStyle = {
    width: '780px'
  }
  
  const strongClasses = ['d-none']
  
  const buttonClasses = ['btn', 'btn-success']
  if (!showed) {
    buttonClasses.push('d-none')
    strongClasses.pop()
  }
  
  return (
    <>
      <div className={className} style={itemStyle}>
        <p>{title}</p>
        <hr/>
        <div className='card m-2'>
          <div className="card__level" style={divStyle}></div>
        </div>
        <strong>{min}/{max}</strong>
        <hr/>
        <div>
          <button className={buttonClasses.join(' ')} onClick={increase}>Make step</button>
          <strong className={strongClasses.join(' ')}>All done!</strong>
        </div>
      </div>
    </>
  )
}