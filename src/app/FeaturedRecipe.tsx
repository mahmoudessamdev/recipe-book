import React from "react";
import Link from "next/link";
import Image from "next/image";
import { data } from "./data/recipes";
function FeaturedRecipe(props: { recipes: data }) {
  const recipe: data = props.recipes;
  const image: string = recipe.image;
  return (
    <div className=" bg-white rounded-3xl grid grid-cols-1 grid-rows-2 gap-4">
      <Image
        src={`/RecipesImages/${image}`}
        alt={image}
        width={250}
        height={250}
        className="rounded-t-3xl h-60 w-full object-center object-cover"
      />
      <div className="py-3 px-4 flex flex-col">
        <p className="text-2xl md:text-3xl font-bold  ">{recipe.title}</p>
        <p className="text-base md:text-xl pt-4  ">{recipe.description}</p>
        <div className="justify-self flex flex-col gap-3 md:flex-row md:justify-between md:items-center pt-3">
          <p className="text-xs font-bold wrap-normal md:max-w-5/10 lg:text-sm lg:max-w-7/10">
            {recipe.time} Min - {recipe.difficulty} prep - {recipe.serve} serves
          </p>
          <Link
            href={{
              pathname: "/Recipes/RecipeViewer",
              query: { recipe: JSON.stringify(recipe) },
            }}
            className="border-2 border-solid border-black px-4 py-2 text-bold rounded-full text-xs lg:text-base mt-2 sm:mt-0 text-center"
          >
            VIEW RECIPES
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedRecipe;
