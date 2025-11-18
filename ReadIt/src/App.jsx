import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'
import BookList from './components/BookList'
import BookPage from './components/BookPage'
import BrowseBooks from './pages/BrowseBooks'
import About from './pages/About'
import AddBook from './pages/AddBook'

import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Home from './pages/Home'


function App() {

  return (
    <Provider store={appStore}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/book/:id' element={<BookPage/>}></Route>
        
        <Route path='/books' element={<BrowseBooks/>}>
          <Route path='/books/:category' element={<BookList />}></Route>
        </Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/Add' element={<AddBook/>}></Route>
      </Routes>
    </Provider >
  )
}

export default App
