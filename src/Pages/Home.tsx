import { HomeContactSection } from "../Components/Home/HomeContactSection";
import { HomeHeader } from "../Components/Home/HomeHeader";
import { HomePhotosSection } from "../Components/Home/HomePhotosSection";
import { HomePortfolioSection } from "../Components/Home/HomePortfolioSection";
import { HomeTechnologiesSection } from "../Components/Home/HomeTechnologiesSection";
import "./App.css";

export const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomePhotosSection />
      <HomeTechnologiesSection />
      <HomePortfolioSection />
      <HomeContactSection />
    </>
  );
};
