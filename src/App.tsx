import { Route, Routes } from "react-router-dom"
import { Admin, Home, Layaout, Login, PassengerDetails, SearchResult, SeatSelection } from "./pages"

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
      <Route path='/admin' element={<Admin />} />
    </Routes >
  )
}

export default App
