import React from "react";
import Link from "next/link";
import Image from "next/image";
import { data } from "./data/recipes";

function SuggestRecipe(props: {
  recipes: data;
}) {
  const randomNum: number = Math.floor(Math.random() * 29);
  const recipe: data = (props.recipes as unknown as data[]) [randomNum];
  const image = recipe.image;
  return (
    <div
      id={recipe.id.toString()}
      key={recipe.id}
      className="bg-white rounded-3xl shadow-gray-500 shadow-xs"
    >
      <div className="mb-6">
        <Image
          src={`/RecipesImages/${image}`}
          alt={image}
          width={200}
          height={200}
          className="h-60 w-full object-center object-cover rounded-t-3xl"
        />
      </div>
      <div className="px-6">
        <p className="text-2xl font-bold mb-1">{recipe.title}</p>
        <p className=" text-gray-500 mb-12 ">{recipe.description}</p>
        <div className="mb-4 flex justify-between items-center ">
          <p className="text-xs sm:text-sm font-bold flex-2">
            {recipe.time} - {recipe.difficulty} prep - {recipe.serve} serves
          </p>
          <Link
            href={{
              pathname: "/Recipes/RecipeViewer",
              query: {
                recipe: JSON.stringify(recipe),
              },
            }}
            onClick={() => {}}
            className="flex-1 px-5 py-2 text-xs sm:text-sm lg:text-base text-center text-nowrap cursor-pointer border-black border rounded-full font-bold hover:shadow-lg"
          >
            VIEW RECIPE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SuggestRecipe;
