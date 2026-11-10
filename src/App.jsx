import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

import NavBar from "./Navigation/NavBar"
import DojoCore from "./Pages/DojoCore"
import Contacts from "./Components/Contacts"
import CalculatorTerminalis from "./Pages/CalculatorTerminalis"

import Home from "./Pages/Home"

function ScrollAlInicio() {
  const location = useLocation()

  useEffect(() => {
    const seccion = location.state?.section
    if (seccion) {
      requestAnimationFrame(() => {
        document.getElementById(seccion)?.scrollIntoView({ behavior: "smooth" })
      })
      return
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.state])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <div className="aurora" aria-hidden="true">
        <span className="aurora-a" />
        <span className="aurora-b" />
      </div>
      <div className="relative z-10">
        <ScrollAlInicio />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dojocore" element={<DojoCore />} />
          <Route path="integratorapp" element={<CalculatorTerminalis />} />
        </Routes>
        <div id="contacto" className="mt-16">
          <Contacts />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
