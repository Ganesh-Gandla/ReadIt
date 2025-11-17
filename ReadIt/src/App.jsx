import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'
import BookList from './components/BookList'
import SearchPage from './pages/SearchPage'
import About from './pages/About'
import AddBook from './pages/AddBook'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<BookList />}></Route>
        <Route path='/books' element={<SearchPage/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/Add' element={<AddBook/>}></Route>
      </Routes>

    </>
  )
}

export default App
