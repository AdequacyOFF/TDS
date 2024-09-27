import {Route, Routes} from "react-router-dom"
import './App.css'
import Footer from './Pages/Footer.jsx'
import Header from './Pages/Header.jsx'
import Home from './Pages/Home.jsx'
import Profile from './Pages/Profile.jsx'
import Create from './Pages/Create.jsx'

function App() {
  return (
  <div className='wrapper'>
    <header className='header'><Header></Header></header>
    <main className='main'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Create" element={<Create />} />
            </Routes>
    </main>
    <footer className='footer'>
        <Footer>
        </Footer>
      </footer>
  </div>
  )
}

export default App
