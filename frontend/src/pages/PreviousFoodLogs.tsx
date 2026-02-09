import Navbar from "../components/Navbar";

export default function PreviousFoodLogs() {
  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto mt-10">
        <button className="bg-gray-700 text-white px-4 py-1 rounded mb-4">
          BACK
        </button>

        <h2 className="text-xl font-semibold mb-6">
          PREVIOUS FOOD LOGS
        </h2>

        <div className="mb-4">
          <span className="bg-gray-700 text-white px-3 py-1 rounded">
            12 JAN 2026
          </span>

          <div className="mt-3 space-y-2">
            <div className="border p-3 rounded">
              Meal: Lunch – Paneer Rice <br />
              Servings: 1 <br />
              Calories: 420 Kcal
            </div>

            <div className="border p-3 rounded">
              Meal: Breakfast – Oatmeal <br />
              Servings: 1 <br />
              Calories: 300 Kcal
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
