import { Routes, Route } from "react-router-dom";
import FoodLogHome from "./pages/FoodLogHome"
import PreviousLogs from "./pages/PreviousLogs";
import Recipes from "./pages/Recipes";
import CalorieCalculator from "./pages/CalorieCalculator";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path="/FoodLogHome" element={<FoodLogHome />} />
      <Route path='/PreviousLogs' element={<PreviousLogs />} />
      <Route path='/Recipes' element={<Recipes />} />
      <Route path="/CalorieCalculator" element={<CalorieCalculator />} />
    </Routes>
  )
}