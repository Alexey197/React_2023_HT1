import PropTypes from 'prop-types';
import {useState} from 'react'

TodoForm.propTypes = {
  created: PropTypes.func.isRequired,
}

function TodoForm({ created }) {
  let [ fields, setFields ] = useState([
    { label: 'Title', value: '', name: 'title', type: 'text' },
    { label: 'Max', value: '', name: 'max', type: 'number' }
  ])
  
  function setFieldValue(e) {
    let { name, value } = e.target
    setFields(fields.map(field => name !== field.name ?
    field :
        {...field, value: value}
    ))
  }
  
  function sendForm() {
    const result = {}
    fields.forEach(field => result[field.name] = field.value)
    setFields(fields.map(field => ({ ...field, value: '' })));
    created(result)
  }
  
  return <form>
    { fields.map(field => <div className="form-group" key={field.name}>
      <label>{ field.label }</label>
      <input
        value={field.value}
        onChange={setFieldValue}
        name={field.name}
        type={field.type}
        className="form-control"
      />
    </div>) }
    <button onClick={sendForm} type="button" >Create todo item</button>
  </form>
}

export default TodoForm