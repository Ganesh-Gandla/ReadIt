import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import BookPage from './components/BookPage'
import BrowseBooks from './pages/BrowseBooks'
import AddBook from './pages/AddBook.jsx'
import About from './pages/About.jsx'
import Error404 from './components/Error404.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <BrowseBooks />,
      },
      {
        path: "/books/:category",
        element: <BrowseBooks />,
      },
      {
        path: "/book/:id",
        element: <BookPage />,
      },
      {
        path: "/add",
        element: <AddBook />,
      },
      {
        path: "/about",
        element: <About />,
      }
    ],
    errorElement: <Error404 />,
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
