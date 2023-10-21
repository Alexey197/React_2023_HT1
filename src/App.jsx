import { useState } from 'react'
// import './App.css'
import { Todo } from './components/Todo'

function App() {
 const [ items, setItems ] = useState([
   {id: 1,title: 'Турник', min: 0, max: 5},
   {id: 2,title: 'Поесть', min: 0, max: 3},
   {id: 3,title: 'Еще что-нибудь', min: 0, max: 10}
 ])
  
  // const [ showButton, setShowButton ] = useState(false)
  
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
  
  return <div>
    {itemsElems}
  </div>
}

export default App
