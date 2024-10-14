import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <h2>Header</h2>
      <Outlet/>
      <h2>Footer</h2>
    </div>
  )
}

export default App
