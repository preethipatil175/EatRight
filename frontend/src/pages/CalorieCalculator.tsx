import NavBar from "../components/Navbar";

const CalorieCalculator = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <NavBar />
      <div className="flex justify-center items-center gap-8 px-60 mt-8">
        {/* LEFT: FORM */}
        <div className="border-2 border-black w-3/5 p-10">
          <div>
            <p className="font-bold text-xl">Name</p>
            <input
              className="border-1 border-black w-3/4 rounded-3xl p-2"
              type="text"
              placeholder="Enter your Name"
            />
          </div>

          <div>
            <p className="font-bold text-xl">Age(yrs)</p>
            <input
              className="border-1 border-black w-3/4 rounded-3xl p-2"
              type="text"
              placeholder="Enter your Age"
            />
          </div>

          <div>
            <p className="font-bold text-xl">Gender</p>
            <select className="border-1 border-black w-3/4 rounded-3xl p-2">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <p className="font-bold text-xl">Height(cm)</p>
            <input
              className="border-1 border-black w-3/4 rounded-3xl p-2"
              type="text"
              placeholder="Enter your Height"
            />
          </div>

          <div>
            <p className="font-bold text-xl">Weight(kg)</p>
            <input
              className="border-1 border-black w-3/4 rounded-3xl p-2"
              type="text"
              placeholder="Enter your Weight"
            />
          </div>

          <div>
            <p className="font-bold text-xl">Goal</p>
            <select className="border-1 border-black w-3/4 rounded-3xl p-2">
              <option value="lose">Lose Weight</option>
              <option value="maintain">Maintain Weight</option>
              <option value="gain">Gain Weight</option>
            </select>
          </div>

          <div>
            <p className="font-bold text-xl">Activity Level</p>
            <select className="border-1 border-black w-3/4 rounded-3xl p-2">
              <option value="sedentary">Sedentary</option>
              <option value="light">Lightly Active</option>
              <option value="moderate">Moderately Active</option>
              <option value="active">Active</option>
              <option value="veryActive">Very Active</option>
            </select>
          </div>
        </div>

        {/* RIGHT: CARDS */}
        <div className="flex flex-col gap-4 w-1/4">
          <div className="px-6 py-4 h-45 border-2 border-black">
            <div className="font-bold text-xl mb-2">Card Title</div>
          </div>

          <div className="px-6 py-4 h-45 border-2 border-black">
            <div className="font-bold text-xl mb-2">Card Title</div>
          </div>

          <div className="px-6 py-4 h-45 border-2 border-black">
            <div className="font-bold text-xl mb-2">Card Title</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalorieCalculator;
