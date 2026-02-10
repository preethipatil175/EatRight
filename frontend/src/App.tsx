import { Routes, Route } from "react-router-dom";
import FoodLogHome from "./pages/FoodLogHome"
import PreviousLogs from "./pages/PreviousLogs";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<FoodLogHome />} />
      <Route path='/PreviousLogs' element={<PreviousLogs />} />
    </Routes>
  )
}