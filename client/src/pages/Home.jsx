import ServicesPreview from "../components/home/ServicesPreview";
import HeroSection from "../components/home/HeroSection";
import MainLayout from "../layouts/mainLayout"
import FeaturedProjects from "../components/home/FeaturedProjects";
import WhyChooseUs from "../components/home/WhyChooseUs";

function Home() {
  return (
    <MainLayout>
      <HeroSection/>
      <ServicesPreview/>
      <FeaturedProjects/>
      <WhyChooseUs/>
    </MainLayout>
  );
}

export default Home;
