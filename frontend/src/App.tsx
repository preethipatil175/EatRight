import { Routes, Route } from "react-router-dom";
import FoodLogHome from "./pages/FoodLogHome"

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<FoodLogHome />} />
    </Routes>
  )
}