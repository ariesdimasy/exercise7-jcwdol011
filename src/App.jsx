import { Routes, Route } from 'react-router'
import './App.css'

import Stopwatch from './pages/stopwatch'
import Counter from "./pages/counter"
import FilterFruit from './pages/filter'
import UserTable from './pages/usertable'
import MessageForm from './pages/messageForm'
import MesssageList from './pages/messageList'

function App() {

  return (
    <>
      <h1>Exercise 7</h1>
      <nav>
        <a href="/counter"> Counter </a>
        <a href="/stopwatch"> Stopwatch </a>
        <a href="/filter-fruits"> Filter Fruits</a>
        <a href="/user-table"> User Table</a>
        <a href='/message-form'> Message Form </a>
        <a href='/message-list'> Message List </a>
      </nav>
     
        <Routes>
          <Route path="/counter" Component={Counter} /> {/* 👈 Renders at /app/ */}
          <Route path="/stopwatch" Component={Stopwatch} />
          <Route path="/filter-fruits" Component={FilterFruit} />
          <Route path="/user-table" Component={UserTable} />
          <Route path='/message-form' Component={MessageForm} />
          <Route path="/message-list" Component={MesssageList} />
        </Routes>
      
      
    </>
  )
}

export default App
