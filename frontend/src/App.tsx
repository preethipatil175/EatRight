import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodLogHome from "./pages/FoodLogHome";
import AddFoodLog from "./pages/AddFoodLog";
import PreviousFoodLogs from "./pages/PreviousFoodLogs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FoodLogHome />} />
        <Route path="/add" element={<AddFoodLog />} />
        <Route path="/previous" element={<PreviousFoodLogs />} />
      </Routes>
    </BrowserRouter>
  );
}
