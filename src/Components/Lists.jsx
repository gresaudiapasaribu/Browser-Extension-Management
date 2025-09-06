import React from "react";

const Lists = ({ filter, setFilter }) => {
  // const filteredCards = cards.filter((card) => {
  //   if (filter === "all") {
  //     return card.isActive === filter;
  //   }
  // });
  return (
    <div className="mt-7 lg:flex lg:justify-between lg:items-center">
      <p className="font-primary text-2xl sm:mb-3.5 sm:text-center">
        Extension List
      </p>
      <div className="flex gap-2 sm:justify-center">
        {["all", "active", "inActive"].map((type) => (
          <button
            onClick={() => setFilter(type)}
            className={`cursor-pointer px-5 py-1 text-white rounded-2xl  transition-colors duration-300 ${
              filter === type
                ? "bg-orange-500 text-black hover:text-black"
                : "bg-white/25 text-white hover:bg-white/35 focus:border border-solid  focus:border-orange-500 "
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Lists;

{
  /* <button
          onClick={() => setFilter("active")}
          className={`cursor-pointer px-5 py-1 text-white rounded-2xl ${
            filter === "active"
              ? "bg-orange-500 text-black"
              : "bg-white/25 text-white "
          }`}
        >
          {" "}
          Active
        </button>
        <button
          onClick={() => setFilter("inActive")}
          className={`cursor-pointer px-5 py-1 text-white rounded-2xl ${
            filter === "inActive"
              ? "bg-orange-500 text-black"
              : "bg-white/25 text-white "
          }`}
        >
          Inactive
        </button> */
}
