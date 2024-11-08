import { Route, Routes } from "react-router-dom"
import { Admin, Home, Layaout, Login, PassengerDetails, SearchResult, SeatSelection } from "./pages"
import { Asiento, Bus, Conductor, Descuento, ProgramacionViaje, Ruta, Terminal } from "./pages/admin/pages"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="" element={<Layaout />}>
        <Route path='/search-results' element={<SearchResult />} />
        <Route path='/seat-selection' element={<SeatSelection />} />
        <Route path='/passenger-details' element={<PassengerDetails />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/admin' element={<Admin />} >
        <Route path="programacion-viaje" element={<ProgramacionViaje />} />
        <Route path="ruta" element={<Ruta />} />
        <Route path="bus" element={<Bus />} />
        <Route path="terminal" element={<Terminal />} />
        <Route path="descuento" element={<Descuento />} />
        <Route path="conductor" element={<Conductor />} />
        <Route path="asiento" element={<Asiento />} />
      </Route>
    </Routes >
  )
}

export default App
