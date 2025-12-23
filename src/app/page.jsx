import AboutUs from "@/components/home/aboutUs/AboutUs";
import HeroSlider from "@/components/home/banner/HeroSlider";
import ServicesSection from "@/components/home/services/ServicesSection";
import React from "react";

function page(props) {
  return (
    <div>
      <HeroSlider></HeroSlider>

      {/* about us section */}
      <AboutUs></AboutUs>

      {/* service overview section */}
      <ServicesSection></ServicesSection>
    </div>
  );
}

export default page;
