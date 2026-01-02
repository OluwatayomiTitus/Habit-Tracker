import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import UserSetup from "./pages/UserSetup"
import Dashboard from "./pages/Dashboard"
import HabitHistory from "./pages/HabitHistory"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<UserSetup />} />
        <Route path="/setup" element={<UserSetup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<HabitHistory />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
