import React, { useEffect, useState } from "react";

const Cards = ({ cards, filter }) => {
  const [cardState, setCardState] = useState(cards);
  useEffect(() => {
    setCardState(cards);
  }, [cards]);
  const handleToggle = (index) => {
    const newState = [...cardState];
    newState[index].isActive = !newState[index].isActive;
    setCardState(newState);
  };
  const handleRemove = (id) => {
    setCardState((prev) => prev.filter((_, index) => index !== id));
  };
  const filteredCards = cardState.filter((card) => {
    if (filter === "all") return true;
    return filter === "active" ? card.isActive : !card.isActive;
  });
  return (
    <div className="text-white mt-8 grid lg:grid-cols-3 gap-5">
      {filteredCards.map((card, index) => {
        return (
          <div key={index} className="bg-white/15 p-4 rounded-lg">
            <div className="flex gap-4 mb-5">
              <img src={card.logo} alt="" className="w-[40px] self-start " />
              <div>
                <p className="font-bold">{card.name}</p>
                <p className="text-gray-400 text-[15px]">{card.description}</p>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => handleRemove(index)}
                className="py-1 px-3 rounded-2xl border border-solid border-gray-500 hover:bg-orange-500 hover:border-none hover:font-medium focus:border focus:border-solid  focus:border-orange-500 hover:text-black cursor-pointer transition-colors duration-300"
              >
                Remove
              </button>
              <div className="">
                <input
                  checked={card.isActive}
                  type="checkbox"
                  className="sr-only peer"
                  id={`toggle-${index}`}
                  onChange={() => handleToggle(index)}
                />
                <label
                  htmlFor={`toggle-${index}`}
                  className={`w-10 h-5 rounded-full block relative cursor-pointer transition-colors duration-300 ${
                    card.isActive ? "bg-orange-500" : "bg-white/20"
                  }`}
                >
                  <span
                    className={`block absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform duration-300 ${
                      card.isActive ? "translate-x-5 bg-white" : "bg-gray-300"
                    }`}
                  ></span>
                </label>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
