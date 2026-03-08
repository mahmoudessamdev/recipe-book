import React from 'react'
import Link from "next/link"
import Image from 'next/image';
import { data } from './data/recipes';
function FeaturedRecipe(props: { recipes: data} ) {
  const recipe : data = props.recipes;
  const image : string= recipe.image;
  return (
    <div className=" bg-white rounded-3xl">
    <Image src={`/RecipesImages/${image}`} alt={image} width={250} height={250} className='rounded-t-3xl h-60 w-full object-center object-cover  ' />
    <div className="py-3 px-4">
      <p className='text-xl sm:text-2xl font-bold '>{recipe.title}</p>
      <p className='text-base pt-4 '>{recipe.description}</p>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-3">
        <p className='text-xs font-bold'>{recipe.time} Min - {recipe.difficulty} prep - {recipe.serve} serves</p>
        <Link href={{pathname:"/Recipes/RecipeViewer" , 
          query: {recipe:JSON.stringify(recipe)} }
        } className='border-2 border-solid border-black px-4 py-2 text-bold rounded-full text-sm mt-2 sm:mt-0'>VIEW RECIPES</Link>
      </div>
    </div>
  </div>
  )
}

export default FeaturedRecipe