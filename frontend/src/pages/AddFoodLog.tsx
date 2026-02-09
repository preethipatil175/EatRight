import Navbar from "../components/Navbar";

export default function AddFoodLog() {
  return (
    <>
      <Navbar />

      <div className="max-w-xl mx-auto mt-10">
        <div className="flex justify-between mb-6">
          <button className="bg-gray-700 text-white px-4 py-1 rounded">
            BACK
          </button>
          <button className="bg-gray-700 text-white px-4 py-1 rounded">
            + ADD NEW LOG
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold">DATE:</label>
            <input type="date" className="w-full border p-2 rounded" />
          </div>

          <div>
            <label className="block text-sm font-semibold">MEAL TYPE:</label>
            <select className="w-full border p-2 rounded">
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold">FOOD ITEM:</label>
            <input type="text" className="w-full border p-2 rounded" />
          </div>

          <div>
            <label className="block text-sm font-semibold">SERVINGS:</label>
            <select className="w-full border p-2 rounded">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold">CALORIES:</label>
            <div className="flex">
              <input type="number" className="w-full border p-2 rounded-l" />
              <span className="border p-2 rounded-r bg-gray-100">KCAL</span>
            </div>
          </div>

          <button className="bg-[#3F5C5A] text-white px-6 py-2 rounded mt-4">
            SAVE
          </button>
        </div>
      </div>
    </>
  );
}
