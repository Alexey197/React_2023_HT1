import PropTypes from 'prop-types';
import {useState} from 'react'

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  changed: PropTypes.func.isRequired,
  showed: PropTypes.bool.isRequired,
}

export function Todo({ showed, title, min, max, changed }) {
  const [level, setLevel] = useState({
    height: '15px',
    width: '0%',
    backgroundColor: 'red',
    background: 'red'
  })
  
  let canInc = min < max
  
  const classes = min / max > 0.33 && min / max < 0.66 ?
    "card-todo__two-thirds" : min / max > 0.66 ?
      "card-todo__full" :
      "card-todo"
  const className = `${classes} m-3 p-2`
  
  function increase() {
    if (canInc) {
      changed(min + 1)
      setLevel({...level, width: `${(min + 1) / max * 100}%`})
    } else console.log('max')
  }
  
  console.log(level.width)
  
  
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
          <div className="card__level" style={level}></div>
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