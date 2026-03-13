"use client";
import React, { useState, useEffect } from "react";
import FeaturedRecipe from "./FeaturedRecipe";
import { data } from "./data/recipes";

function FeaturedSection(props: { recipes: data }) {
  const [page, setPage] = useState(0);
  const [prevStyle, setPrevStyle] = useState(
    "w-9 h-9 mx-1 rounded-full border-2 border-gray-300 text-gray-300 text-lg"
  );
  function nextPage() {
    setPage(page + 2);
    setPrevStyle(
      "w-9 h-9 mx-1 rounded-full border-2 border-gray-500 text-gray-500 text-lg hover:bg-black hover:text-white"
    );
  }
  function prevPage() {
    if (page !== 0) {
      setPage(page - 2);
    }
  }

  useEffect(() => {
    if (page === 0) {
      setPrevStyle(
        "w-9 h-9 mx-1 rounded-full border-2 border-gray-300 text-gray-300 text-lg"
      );
    }
  }, [page]);
  const section1 : number = 0 + page;
  const section2 : number = 1 + page;
  return (
    <div className="flex justify-center items-center ">
      <div className=" flex flex-col  w-11/12  border border-gray-400 rounded-3xl my-4">
        <div className="flex justify-between items-center p-11">
          <p className=" text-2xl md:text-3xl xl:text-5xl font-bold ">FEATURED RECIPES</p>
          <div className="">
            <button id="prevButton" className={prevStyle} onClick={prevPage}>
              &#10094;
            </button>
            <button
              className="w-9 h-9 mx-1 rounded-full border-2 border-gray-500 text-gray-500 text-lg hover:bg-black hover:text-white "
              onClick={nextPage}
            >
              &#10095;
            </button>
          </div>
        </div>
        <div className="px-5 pb-5 grid grid-cols-2 grid-rows-1 gap-4">
          <FeaturedRecipe recipes={(props.recipes as unknown as data[])[section1]} />
          <FeaturedRecipe recipes={(props.recipes as unknown as data[])[section2]} />
        </div>
      </div>
    </div>
  );
}

export default FeaturedSection;
