import { HomeHeader } from "../Components/Home/HomeHeader";
import { HomePhotosSection } from "../Components/Home/HomePhotosSection";
import { HomeTechnologiesSection } from "../Components/Home/HomeTechnologiesSection";
import "./App.css";

export const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomePhotosSection />
      <HomeTechnologiesSection />
    </>
  );
};
