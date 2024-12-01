import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import { PassengerDetails, SearchResult, SeatSelection, User } from "./pages/user"
import Login from "./pages/login/Login"
import { Admin } from "./pages/admin/Admin"
import { AdminProfile, Asiento, Bus, Conductor, Descuento, ProgramacionViaje, Ruta, Servicio, Terminal } from "./pages/admin/pages"
import { PrivateRoute } from "./components/PrivateRoute"
import { Boleto, MetodoPago, Perfil, Compra } from "./pages/client/pages"
import { Client } from "./pages/client/Client"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/login/:userType' element={<Login />} />

      <Route path="" element={<User />}>
        <Route path='/search-results' element={<SearchResult />} />
        <Route path='/seat-selection' element={<SeatSelection />} />
        <Route path='/passenger-details' element={<PassengerDetails />} />
      </Route>

      <Route path='/admin' element={<PrivateRoute><Admin /></PrivateRoute>} >
        <Route path="" element={<AdminProfile />} />
        <Route path="programacion-viaje" element={<ProgramacionViaje />} />
        <Route path="ruta" element={<Ruta />} />
        <Route path="bus" element={<Bus />} />
        <Route path="terminal" element={<Terminal />} />
        <Route path="descuento" element={<Descuento />} />
        <Route path="conductor" element={<Conductor />} />
        <Route path="asiento" element={<Asiento />} />
        <Route path="servicio" element={<Servicio />} />
      </Route>
      <Route path='/client' element={<Client />} >
        <Route path="perfil" element={<Perfil />} />
        <Route path="metodo-pago" element={<MetodoPago />} />
        <Route path="boleto" element={<Boleto />} />
        <Route path="compra" element={<Compra />} />
      </Route>
    </Routes >
  )
}

export default App
