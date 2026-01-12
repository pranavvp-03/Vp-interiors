import ServicesPreview from "../components/home/ServicesPreview";
import HeroSection from "../components/home/HeroSection";
import MainLayout from "../layouts/mainLayout"
import FeaturedProjects from "../components/home/FeaturedProjects";

function Home() {
  return (
    <MainLayout>
      <HeroSection/>
      <ServicesPreview/>
      <FeaturedProjects/>
    </MainLayout>
  );
}

export default Home;
