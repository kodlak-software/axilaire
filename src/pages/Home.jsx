import React from 'react';
import Hero from './Hero';
import About from './About';
import Blog from './Blog';
import Cta from './Cta';
import Feature from './Feature';
import Statistic from './Statistic';
import Contact from './Contact';
import Cookies from './Cookies';
import Footer from './Footer';


const Home = () => {
    return (
      <div className="w-full">

         <Hero />
         <About />
         <Blog />
         <Cta />
         <Feature />
         <Statistic />
         <Contact />
         <Cookies />
         <Footer />
      </div>
       
    );
};

export default Home;