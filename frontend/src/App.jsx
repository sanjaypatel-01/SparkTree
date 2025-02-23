import { useState } from 'react'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Choose from './pages/Choose'
import Linkss from './pages/Linkss'
import Layout from './pages/Layout'
import { BrowserRouter } from "react-router-dom"
import Routing from './pages/Routing'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </>
  )
}

export default App
