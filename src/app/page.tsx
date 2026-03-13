"use client"
import Footer from "./components/Footer";
import JoinUs from "./components/JoinUs";
import NavBar from "./components/NavBar";
import ExploreSection from "./ExploreSection";
import FeaturedSection from "./FeaturedSection";
import HeroSection from "./HeroSection";
import RecipeSection from "./RecipeSection";
import { recipes , data} from "./data/recipes";
function Home() {
  
  return (
    <div className="">
      <NavBar /> 
      <HeroSection />
      <RecipeSection recipes={(recipes as unknown as data)} />
      <ExploreSection />
      <FeaturedSection recipes={(recipes as unknown as data)} />
      <JoinUs />
      <Footer />
    </div>
  );
}
export default Home