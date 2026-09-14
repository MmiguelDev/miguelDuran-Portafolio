import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from "./Navigation/NavBar"
import DojoCore from "./Pages/DojoCore"
import Contacts from "./Components/Contacts"
import CalculatorTerminalis from "./Pages/CalculatorTerminalis"

import Home from "./Pages/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dojocore" element={<DojoCore />} />
          <Route path="integratorapp" element={<CalculatorTerminalis />} />
        </Routes>
        <div id="contacto" className="scroll mt-16">
          <Contacts />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
