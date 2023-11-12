import { useState } from 'react'
import TodoItem  from './components/TodoItem'
import AppTodoForm from './components/TodoForm.jsx'
import LazyInput from './components/LazyInput.jsx'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import useWindowSize from './hooks/useWindowSize.jsx'

function App() {
 const [ items, setItems ] = useState([
   {id: randomId(),title: 'Турник', current: 0, max: 5},
   {id: randomId(),title: 'Поесть', current: 0, max: 3},
   {id: randomId(),title: 'Еще что-нибудь', current: 0, max: 10}
 ])

  const [ login, setLogin ] = useState('')

  let { width, height } = useWindowSize()
  console.log(width, height);

  function randomId() {
   return Math.random() + ':' + Date.now()
  }

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

  function createItem({ title, max}) {
    setItems([...items, {title, max: +max, current: 0, id: randomId()}])
  }

  // function applyLogin(newLogin) {
  //  setLogin(newLogin.replace(/\D/g, ''))
  // }

  return <div className="container">
    <hr/>
    <LazyInput
      value={login}
      onChange={setLogin}
      placeholder="Lazy login"
      type="text"
    />
    <hr/>
    <h3>{login}</h3>
    <hr/>
    <button onClick={() => setLogin('admin')}>lol</button>
    <AppTodoForm created={createItem}/>
    {itemsElems}
    <hr />
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
  </div>
}

export default App
