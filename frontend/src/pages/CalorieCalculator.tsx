import NavBar from "../components/Navbar";

const CalorieCalculator = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <NavBar />
      <div>
        <h1 className="text-3xl font-bold text-center mt-8">
          Calorie Calculator
        </h1>
        <div className="container border-2 border-black p-10 w-1/2 mt-5 mx-auto">
          <div>
            <p>Name</p>
            <input type="text" placeholder="Enter your Name" />
          </div>
          <div>
            <p>Age</p>
            <input type="text" placeholder="Enter your Age" />
          </div>
          <div>
            <p>Gender</p>
            <select>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <p>Height(in cm)</p>
            <input type="text" placeholder="Enter your Height" />
          </div>
          <div>
            <p>Weight(in kg)</p>
            <input type="text" placeholder="Enter your Weight" />
          </div>
          <div>
            <p>Goal</p>
            <select>
              <option value="lose">Lose Weight</option>
              <option value="maintain">Maintain Weight</option>
              <option value="gain">Gain Weight</option>
            </select>
          </div>
          <div>
            <p>Activity Level</p>
            <select>
              <option value="sedentary">
                Sedentary (little or no exercise)
              </option>
              <option value="light">
                Lightly Active (light exercise/sports 1-3 days/week)
              </option>
              <option value="moderate">
                Moderately Active (moderate exercise/sports 3-5 days/week)
              </option>
              <option value="active">
                Active (hard exercise/sports 6-7 days/week)
              </option>
              <option value="veryActive">
                Very Active (very hard exercise/sports & physical job)
              </option>
            </select>
          </div>
        </div>
        <div>
          <div className="px-6 py-4 h-30 w-1/2 border-2 border-black">
            <div className="font-bold text-xl mb-2 ">Card Title</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>
          <div className="px-6 py-4 h-30 w-1/2 border-2 border-black">
            <div className="font-bold text-xl mb-2">Card Title</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>
          <div className="px-6 py-4 h-30 w-1/2 border-2 border-black">
            <div className="font-bold text-xl mb-2">Card Title</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalorieCalculator;
