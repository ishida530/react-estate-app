import Navbar from './componenets/navbar/Navbar'
import './layout.scss'
import HomePage from './routes/homepage/HomePage'

function App() {
  return (
    <div className="layout">
      <div >
        <Navbar />
      </div>
      <div className="content">
        <HomePage />

      </div>
    </div>
  )
}

export default App