import Hero from "./hero/Hero";
import Collections from "./collections/Collections";
import Manifesto from "./manifesto/Manifesto";
import JoinSection from "./join-section/JoinSection";
import Footer from "./footer/Footer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Collections />
      <Manifesto />
      <JoinSection />
      <Footer />
    </>
  );
};

export default HomePage;
