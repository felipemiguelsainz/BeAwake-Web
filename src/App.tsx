//PAGES IMPORT
import './index.css'
import HomePage from './pages/HomePage'
import Navbar from './pages/Navbar'
import OurModelPage from './pages/OurModelPage'
import OurProducts from './pages/OurProducts'
import ValuesPage from './pages/ValuesPage'

function App() {

  return (
    <div className='background-blue'>
      <Navbar/>
      <HomePage/>
      <ValuesPage/>
      <OurModelPage/>|
      <OurProducts/>
    </div>
  )
}

export default App

