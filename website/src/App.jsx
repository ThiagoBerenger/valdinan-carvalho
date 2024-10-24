import './App.css'
import { Outlet } from 'react-router-dom'

import Header from './Components/Header/Header'
import FixedWhatsapp from './Components/FixedWhatsapp/FixedWhatsapp'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Header />
      <FixedWhatsapp/>
        <Outlet />
      <Footer />
    </div>
  )
}

export default App
