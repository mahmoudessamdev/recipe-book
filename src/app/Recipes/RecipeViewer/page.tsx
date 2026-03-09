'use client'
import Footer from '@/app/components/Footer'
import JoinUs from '@/app/components/JoinUs'
import NavBar from '@/app/components/NavBar'
import React, { Suspense } from 'react'
import DisplayedRecipes from './DisplayedRecipes'
import { recipes, data } from '@/app/data/recipes'
import FeaturedSection from '@/app/FeaturedSection'


function page() {
  return (
    <div className='bg-main'>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <DisplayedRecipes />
      </Suspense>
      <FeaturedSection recipes={(recipes as unknown as data)} />
      <JoinUs />
      <Footer />
    </div>
  )
}

export default page