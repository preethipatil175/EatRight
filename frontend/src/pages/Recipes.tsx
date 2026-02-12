import { useState } from "react";
import NavBar from "../components/Navbar";
import { URL } from "../assests/constants";

const Recipes = () => {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState(undefined);

  const payload = {
    contents: [
      {
        parts: [
          {
            text: question,
          },
        ],
      },
    ],
  };
  const askQuestion = async () => {
    let response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    response = await response.json();
      setResult(response.candidates[0].content.parts[0].text);
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <NavBar />
      <div className="container w-1/2 mx-auto mt-10 gap-4">
        <h2 className="pl-5 mb-2 text-3xl font-bold text-green-700">
          Get Your Personalised Recipes
        </h2>
        <div className="h-120 border-1 rounded-2xl">{result}</div>
        <div className="border-1 rounded-3xl p-1 mt-5  mx-auto flex">
          <input
            className="p-3 w-full h-full outline-none"
            type="text"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Search Recipes"
          />
          <button
            onClick={askQuestion}
            className="bg-gray-500  px-4 py-2 rounded-r-3xl"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
