import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from "./Navigation/NavBar"
import DojoCore from "./Pages/DojoCore"
import Contacts from "./Components/Contacts"
import CalculatorTerminalis from "./Pages/CalculatorTerminalis"

import Home from "./Pages/Home"

function App() {
  return (
    <BrowserRouter>
      <div className="aurora" aria-hidden="true">
        <span className="aurora-a" />
        <span className="aurora-b" />
      </div>
      <div className="relative z-10">
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
