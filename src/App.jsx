import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Summary from './component/Summary'
import User from './component/User'
import Footer from './component/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/summary" element={<Summary/>}/>
      <Route exact path="/summary/bookshow" element={<User/>}/>
   
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
