import { Provider } from 'react-redux'
import appStore from './utils/appStore'

import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import './App.css'

function App() {

  return (
    <Provider store={appStore}>
      <NavBar />
      <Outlet />
      <Footer />
    </Provider >
  )
}

export default App
