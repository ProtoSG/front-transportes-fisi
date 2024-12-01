import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import { PassengerDetails, SearchResult, SeatSelection, User } from "./pages/user"
import Login from "./pages/login/Login"
import { Admin } from "./pages/admin/Admin"
import { AdminProfile, Asiento, Bus, Conductor, Descuento, ProgramacionViaje, Ruta, Servicio, Terminal } from "./pages/admin/pages"
import { Boleto, MetodoPago, Perfil, Compra } from "./pages/client/pages"
import { Client } from "./pages/client/Client"
import { PrivateRouteAdmin, PrivateRouteClient } from "./components/PrivateRoute"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/login/:userType' element={<Login />} />

      <Route path="" element={<User />}>
        <Route path='/search-results' element={<SearchResult />} />
        <Route path='/seat-selection' element={<PrivateRouteClient><SeatSelection /></PrivateRouteClient>} />
        <Route path='/passenger-details' element={<PrivateRouteClient><PassengerDetails /></PrivateRouteClient>} />
      </Route>

      <Route path='/admin' element={<PrivateRouteAdmin><Admin /></PrivateRouteAdmin>} >
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

      <Route path='/client' element={<PrivateRouteClient><Client /></PrivateRouteClient>} >
        <Route path="perfil" element={<Perfil />} />
        <Route path="metodo-pago" element={<MetodoPago />} />
        <Route path="boleto" element={<Boleto />} />
        <Route path="compra" element={<Compra />} />
      </Route>
    </Routes >
  )
}

export default App
