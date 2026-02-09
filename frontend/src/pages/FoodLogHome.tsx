import { useNavigate } from "react-router-dom";

export default function FoodLogHome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-red-500">
      {/* NAVBAR */}
      <div className="flex justify-between items-center px-16 py-6">
        <h1 className="font-semibold tracking-wide">EATRIGHT</h1>

        <div className="flex items-center gap-10 text-sm">
          <span className="border-b-2 border-black pb-1">FOOD LOG</span>
          <span className="text-gray-600">CALORIE CALCULATOR</span>
          <span className="text-gray-600">RECIPES</span>
          <span className="text-gray-700">👤</span>
        </div>
      </div>

      {/* CENTER CONTENT */}
      <div className="flex flex-col items-center mt-20">
        {/* FOOD LOG TITLE BOX */}
        <div className="border px-10 py-3 mb-14">
          <h2 className="text-lg tracking-wide">FOOD LOG</h2>
        </div>

        {/* CARDS */}
        <div className="flex gap-12">
          {/* PREVIOUS FOOD LOGS */}
          <div
            onClick={() => navigate("/previous")}
            className="w-[260px] h-[260px] bg-[#3f5f5b] text-white p-6 rounded-md cursor-pointer"
          >
            <div className="flex items-start gap-2 mb-3">
              <span className="text-lg">✔</span>
              <h3 className="font-semibold leading-tight">
                PREVIOUS <br /> FOOD LOGS
              </h3>
            </div>

            <p className="text-sm text-gray-200">
              View and manage <br />
              your past meals
            </p>
          </div>

          {/* ADD NEW LOG */}
          <div
            onClick={() => navigate("/add")}
            className="w-[260px] h-[260px] bg-[#3f5f5b] text-white p-6 rounded-md cursor-pointer"
          >
            <div className="flex items-start gap-2 mb-3">
              <span className="text-lg">＋</span>
              <h3 className="font-semibold leading-tight">
                ADD NEW LOG
              </h3>
            </div>

            <p className="text-sm text-gray-200">
              Add a new meal and <br />
              track calories
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
