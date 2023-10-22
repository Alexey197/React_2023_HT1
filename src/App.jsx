import { useState } from 'react'
// import './App.css'
import { Todo } from './components/Todo'
import React from 'react'

function App() {
 const [ items, setItems ] = useState([
   {id: 1,title: 'Турник', min: 0, max: 5},
   {id: 2,title: 'Поесть', min: 0, max: 3},
   {id: 3,title: 'Еще что-нибудь', min: 0, max: 10}
 ])
  
  let titleInput = React.createRef()
  let minInput = React.createRef()
  let maxInput = React.createRef()
  
  function addNewTask() {
   let newTaskObj = {}
    newTaskObj.id = items.length + 1
    newTaskObj.title = titleInput.current.value
    newTaskObj.min = parseInt(minInput.current.value)
    newTaskObj.max = parseInt(maxInput.current.value)
    console.log(newTaskObj)
    
    setItems([...items, newTaskObj])
  }
  
  function setItemValue(newValue, id) {
   setItems(items.map(item => item.id !== id ? item : {
    ...item, min: newValue
   }))
  }

  const itemsElems = items.map(item => <Todo
    key={item.id}
    title={item.title}
    min={item.min}
    max={item.max}
    changed={(newValue) => setItemValue(newValue, item.id)}
    showed={item.min !== item.max}
  />)
  
  return <>
    <div className="card m-2 p-2">
      <label htmlFor="myTitle">Enter your task title</label>
      <input type="text" id="myTitle" ref={titleInput}/>
    </div>
    <div className="card m-2 p-2">
      <label htmlFor="myMin">Enter min</label>
      <input type="text" id="myMin" ref={minInput}/>
    </div>
    <div className="card m-2 p-2">
      <label htmlFor="myMax">Enter max</label>
      <input type="text" id="myMax" ref={maxInput}/>
    </div>
    <button className="btn btn-success m-1 p-1" onClick={addNewTask}>Add task</button>
    <div>
      {itemsElems}
    </div>
  </>
}

export default App
