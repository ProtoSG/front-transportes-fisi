import { Route, Routes } from "react-router-dom"
import { Home, Layaout, PassengerDetails, SearchResult, SeatSelection } from "./pages"

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="" element={<Layaout />}>
        <Route path='/search-results' element={<SearchResult />} />
        <Route path='/seat-selection' element={<SeatSelection />} />
        <Route path='/passenger-details' element={<PassengerDetails />} />
      </Route>
    </Routes>
  )
}

export default App
