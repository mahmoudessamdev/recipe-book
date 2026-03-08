import React from 'react'
import Link from "next/link"

function HeroSection() {
  return (
    <div className='flex justify-center items-center' >
      <div className="h-560 bg-hero-section-bg w-11/12 bg-cover bg-no-repeat bg-center flex items-center justify-center rounded-3xl my-5">
        <div className="flex  flex-col items-center justify-center bg-[#00000065] w-full h-full text-white rounded-3xl">
          <p className=' text-5xl md:text-8xl font-bold text-center max-w-xl md:max-w-2xl' >UNLEASH CULINARY EXCELLENCE</p>
          <p className='text-2xl md:text-3xl text-center max-w-xl md:max-w-2xl' >Explore a world of flavors, discover hand crafted recipes, and let aroma of our passion for cooking fill your kitchen</p>
          <Link href={"/Recipes"} className='bg-orange-400 py-2 px-5 text-black mt-7 rounded-full text-lg  hover:opacity-90'>EXPLORE RECIPES</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection