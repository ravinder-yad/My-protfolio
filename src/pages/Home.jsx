import Hero from '../components/home/Hero';
import TechStackSlider from '../components/home/TechStackSlider';
import AboutPreview from '../components/home/AboutPreview';
import Skills from '../components/home/Skills';
import HomeServices from '../components/home/HomeServices';
import FeaturedProjects from '../components/home/FeaturedProjects';
import ExperienceTimeline from '../components/home/ExperienceTimeline';
import HomeCertificates from '../components/home/HomeCertificates';
import Testimonials from '../components/home/Testimonials';
import ContactCTA from '../components/home/ContactCTA';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TechStackSlider />
      <AboutPreview />
      <Skills />
      <HomeServices />
      <FeaturedProjects />
      <ExperienceTimeline />
      <HomeCertificates />
      <Testimonials />
      <ContactCTA />
    </div>
  );
};

export default Home;
