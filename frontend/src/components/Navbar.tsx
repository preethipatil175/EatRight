export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-5">
      <h1 className="font-bold text-lg">EATRIGHT</h1>

      <div className="flex gap-8 text-sm">
        <span className="font-semibold border-b-2 border-black">
          FOOD LOG
        </span>
        <span className="text-gray-600">CALORIE CALCULATOR</span>
        <span className="text-gray-600">RECIPES</span>
        <span>👤</span>
      </div>
    </div>
  );
}
