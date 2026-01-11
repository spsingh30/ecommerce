import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import Navbar from './pages/Navbar'
import { Userauth } from './hooks/UserContext'
import { BrowserRouter , Route,Routes } from 'react-router-dom'
import Loginpage from './pages/Loginpage'
import Cartpage from './pages/cartpage'
function App() {

  return (
    <>

<BrowserRouter>
      <Userauth>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path='/cart' element={<Cartpage/>} />
        </Routes>

      </Userauth>
    </BrowserRouter>
    </>
  )
}

export default App
