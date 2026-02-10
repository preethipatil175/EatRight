import NavBar from "../components/Navbar";
import { useState, useEffect } from "react";

interface FoodLog {
  id: number;
  food_name: string;
  calories: number;
  date: string;
  meal_type: string;
}

const PreviousLogs = () => {
  const [logs, setLogs] = useState<FoodLog[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/food-log/")
      .then((res) => res.json())
      .then((data) => setLogs(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <NavBar />
      <div>
        <h1>Previous Logs</h1>

        {logs.map((log: FoodLog) => (
          <div key={log.id}>
            <p>{log.meal_type}</p>
            <p>{log.food_name}</p>
            <p>{log.calories}</p>
            <p>{log.date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PreviousLogs;
