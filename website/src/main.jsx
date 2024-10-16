import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// páginas
import Home from './Routes/Home.jsx'
import About from './Routes/About.jsx'
import Contact from './Routes/Contact.jsx'
import Civil from './Routes/Civil.jsx'

// router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/sobre',
        element: <About />
      },
      {
        path: '/direito-civil',
        element: <Civil />
      },
      {
        path: '/contato',
        element: <Contact />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
