import { Routes, Route } from 'react-router'
import './App.css'

import Stopwatch from './pages/stopwatch'
import Counter from "./pages/counter"
import FilterFruit from './pages/filter'
import UserTable from './pages/usertable'

function App() {

  return (
    <>
      <h1>Exercise 7</h1>
      <nav>
        <a href="/counter"> Counter </a>
        <a href="/stopwatch"> Stopwatch </a>
        <a href="/filter-fruits"> Filter Fruits</a>
        <a href="/user-table"> User Table</a>
      </nav>
     
        <Routes>
          <Route path="/counter" Component={Counter} /> {/* 👈 Renders at /app/ */}
          <Route path="/stopwatch" Component={Stopwatch} />
          <Route path="/filter-fruits" Component={FilterFruit} />
          <Route path="/user-table" Component={UserTable} />
        </Routes>
      
      
    </>
  )
}

export default App
