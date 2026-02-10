import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/FoodLogHome">FOOD LOG</NavLink>
      <NavLink to="/Recipes">RECIPES</NavLink>
      <NavLink to="/CalorieCalculator">CALORIE CALCULATOR</NavLink>
    </>
  );
};

const Nav = () => {
  return (
    <>
      <nav className="w-1/3 p-10 pt-15">
        <div className="flex justify-between">
                  <NavLinks />
                  <img src="public/userlogo.png" alt="User-Logo" className="w-7 h-7 rounded-full" />
        </div>
      </nav>
    </>
  );
};

const NavBar = () => {
    return (
        <header className="bg-gray-200 sticky h-20 top-0 z-20 mx-auto flex w-full items-center justify-between">
            <h1 className="text-3xl p-10 font-bold">EatRight</h1>
            <Nav />
        </header>
    )
}

export default NavBar;