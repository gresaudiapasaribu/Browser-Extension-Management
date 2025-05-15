import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Lists from "./Components/Lists";
import "./App.css";
import Cards from "./Components/Cards";
const App = () => {
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("/data.json")
      .then((responses) => responses.json())
      .then((data) => setCards(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-[100vh] text-white bg-gradient-to-b from-black to-blue-950 sm:px-10 lg:px-30 py-10">
      <Navbar/>
      <Lists cards={cards} filter={filter} setFilter={setFilter} />
      <Cards cards={cards} filter={filter} />
    </div>
  );
};

export default App;
