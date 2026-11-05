import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Explore from './components/Explore'
import DestinationDetails from './components/DestinationDetails'
import MyTrip from './components/MyTrip'
import About from './components/About'
import Login from './components/Login'
import Plantrip from './components/Plantrip'
import Signin from './components/Signin'

function App() {
const [trip, setTrip] = useState(null)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/explore' element={<Explore />}></Route>
      <Route path='/destinationdetails/:id' element={<DestinationDetails />}></Route>
      <Route path='/mytrip' element={<MyTrip trip={trip}/>}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/plantrip/:id' element={<Plantrip setTrip={setTrip} />}></Route>      
    </Routes>
    </BrowserRouter>
  )
}

export default App
