import { useState } from "react";
import NavBar from "../components/Navbar";

const CalorieCalculator = () => {
  const [bmr, setBmr] = useState<number | null>(null);
  const [tdee, setTdee] = useState<number | null>(null);
  const [calories, setCalories] = useState<number | null>(null);

  const handleCalculate = async () => {
    const response = await fetch("http://127.0.0.1:8000/user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        age: Number(age),
        gender: gender,
        height_cm: Number(height),
        weight_kg: Number(weight),
        activity_level: activityLevel,
        goal: goal,
      }),
    });
    if (!response.ok) {
      console.error("API Error");
      return;
    }

    const data = await response.json();

    setBmr(data.bmr);
    setTdee(data.tdee);
    setCalories(data.calories);
  };

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("Loss");
  const [activityLevel, setActivityLevel] = useState("Sedentary");

  return (
    <div className="min-h-screen bg-gray-200">
      <NavBar />
      <div className="flex justify-center items-center gap-8 px-60 mt-8">
        {/* LEFT: FORM */}
        <div className="border-2 border-black rounded-2xl w-3/5 px-10 py-2">
          <div className="px-10">
            <p className="font-bold text-xl px-3">Name</p>
            <input
              className="border-1 border-black w-full rounded-3xl p-2"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your Name"
            />
          </div>

          <div className="px-10">
            <p className="font-bold text-xl px-3 mt-2">Age(yrs)</p>
            <input
              className="border-1 border-black w-full rounded-3xl p-2"
              type="number"
              value={age}
              onChange={(event) => setAge(event.target.value)}
              placeholder="Enter your Age"
            />
          </div>

          <div className="px-10">
            <p className="font-bold text-xl px-3 mt-2 ">Gender</p>
            <select
              className="border-1 border-black w-full rounded-3xl p-2"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="px-10">
            <p className="font-bold text-xl px-3 mt-2 ">Height(cm)</p>
            <input
              className="border-1 border-black w-full rounded-3xl p-2"
              type="number"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
              placeholder="Enter your Height"
            />
          </div>

          <div className="px-10">
            <p className="font-bold text-xl px-3 mt-2">Weight(kg)</p>
            <input
              className="border-1 border-black w-full rounded-3xl p-2"
              type="number"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
              placeholder="Enter your Weight"
            />
          </div>

          <div className="px-10">
            <p className="font-bold text-xl px-3 mt-2">Goal</p>
            <select
              className="border-1 border-black w-full rounded-3xl p-2"
              value={goal}
              onChange={(event) => setGoal(event.target.value)}
            >
              <option value="Loss">Lose Weight</option>
              <option value="Maintain">Maintain Weight</option>
              <option value="Gain">Gain Weight</option>
            </select>
          </div>

          <div className="px-10">
            <p className="font-bold text-xl px-3 mt-2">Activity Level</p>
            <select
              className="border-1 border-black w-full rounded-3xl p-2"
              value={activityLevel}
              onChange={(event) => setActivityLevel(event.target.value)}
            >
              <option value="Sedentary">Sedentary</option>
              <option value="Lightly Active">Lightly Active</option>
              <option value="Moderate">Moderately Active</option>
              <option value="Active">Active</option>
              <option value="Very Active">Very Active</option>
            </select>
          </div>
          <button
            onClick={handleCalculate}
            className="bg-gray-500 hover:bg-gray-700 text-white ml-50 font-bold py-2 px-6 rounded-full mt-4"
          >
            Calculate
          </button>
        </div>

        {/* RIGHT: CARDS */}
        <div className="flex flex-col gap-4 w-1/4">
          <div className="px-6 py-4 h-48 border-2 border-black rounded-2xl">
            <div className="font-bold text-center text-xl mb-2">BMR</div>
            <div className="text-center text-lg">
              {bmr !== null ? bmr : "--"}
            </div>
          </div>

          <div className="px-6 py-4 h-48 border-2 border-black rounded-2xl">
            <div className="font-bold text-xl text-center mb-2">TDEE</div>
            <div className="text-center text-lg">
              {tdee !== null ? tdee : "--"}
            </div>
          </div>

          <div className="px-6 py-4 h-48 border-2 rounded-2xl border-black">
            <div className="font-bold text-xl mb-2">Daily Calorie Goal</div>
            <div className="text-center text-lg">
              {calories !== null ? calories : "--"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalorieCalculator;
