import NavBar from "../components/Navbar";
import { useState } from "react";

const AddNewLog = () => {
  const [foodName, setFoodName] = useState("");
  const [calories, setCalories] = useState<number | "">("");
  const [mealType, setMealType] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newLog = {
      food_name: foodName,
      calories: calories,
      meal_type: mealType,
      date: date,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/food-log/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLog),
      });

      if (!response.ok) {
        throw new Error("Failed to add log");
      }

      alert("Log added successfully!");

      // Clear form
      setFoodName("");
      setCalories("");
      setMealType("");
      setDate("");
    } catch (error) {
      console.error(error);
      alert("Error adding log");
    }
  };

  return (
    <>
      <NavBar />
      <div>
        <h1>Add New Log</h1>

        <form onSubmit={handleSubmit}>
          <p>Food Name</p>
          <input
            type="text"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            required
          />

          <p>Calories</p>
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(Number(e.target.value))}
            required
          />

          <p>Meal Type</p>
          <input
            type="text"
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
            required
          />

          <p>Date</p>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <br />
          <button type="submit">Add Log</button>
        </form>
      </div>
    </>
  );
};

export default AddNewLog;
