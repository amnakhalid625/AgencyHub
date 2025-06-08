import Hero from '../components/Hero';
import AboveCard from '../components/AboveCard';
import Testimonials from '../components/Testimonails';
import Pattern from '../components/Pattern';
import BestSeller from '../components/BestSeller';
import Features from '../components/Features';
import { Helmet } from 'react-helmet-async';
import Schedule from '../components/Schedule';


const Home = () => {
  return (
    <>
      <Helmet>
        <title>Biz.Tech.Mgt</title>
        <meta name="description" content="Business Technology Management business" />
      </Helmet>
     <Hero />
      <AboveCard />
      <Pattern />
      <BestSeller />
      <Schedule />
      <Features />
      {/* <About /> */}
      <Testimonials />
    </>
  );
};

export default Home;
