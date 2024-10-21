import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// páginas
import Home from './Routes/Home.jsx'
import About from './Routes/About.jsx'
import Contact from './Routes/Contact.jsx'
import Civil from './Routes/Civil.jsx'
import Trabalhista from './Routes/Trabalhista.jsx'
import Consumidor from './Routes/Consumidor.jsx'
import Previdenciario from './Routes/Previdenciario.jsx'

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
        path: '/direito-trabalhista',
        element: <Trabalhista />
      },
      {
        path: '/direito-do-consumidor',
        element: <Consumidor/>
      },
      {
        path: '/direito-previdenciario',
        element: <Previdenciario/>
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
