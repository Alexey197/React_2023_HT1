import { useState } from 'react'
import TodoItem  from './components/TodoItem'

function App() {
 const [ items, setItems ] = useState([
   {id: 1,title: 'Турник', current: 0, max: 5},
   {id: 2,title: 'Поесть', current: 0, max: 3},
   {id: 3,title: 'Еще что-нибудь', current: 0, max: 10}
 ])
  
  function increaseItem(id) {
   setItems(items.map(item =>
     item.id === id && item.current < item.max ?
       {...item, current: item.current + 1} :
       item
   ))
  }
  
  let itemsElems = items.map(item => <TodoItem
    key={item.id}
    item={item}
    step={increaseItem}
  />)
  
  return <div className="container">
    {itemsElems}
  </div>
}

export default App
