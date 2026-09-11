import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from "./Navigation/NavBar"
import DojoCore from "./Pages/DojoCore"

import Home from "./Pages/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dojocore" element={<DojoCore />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
