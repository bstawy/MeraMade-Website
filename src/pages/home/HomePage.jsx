import Hero from "./hero/Hero";
import Collections from "./collections/Collections";
import Manifesto from "./manifesto/Manifesto";
import JoinSection from "./join-section/JoinSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Collections />
      <Manifesto />
      <JoinSection />
    </>
  );
};

export default HomePage;
