// eslint-disable-next-line no-unused-vars
import React from 'react';
import Welcome from '../Welcome/Welcome';
import Proyectos from '../Proyectos/Proyectos';
import SobreMi from '../SobreMi/SobreMi';
import Navbar from "../Navbar/Navbar";
import Habilidades from '../Habilidades/Habilidades';
import Contactame from '../Contactame/Contactame';
import Footer from '../Footer/Footer';


const Home = () => {


  return (
    <div>
      <Navbar/>
      <Welcome />
      <Proyectos/>
      <SobreMi/>
      <Habilidades/>
      <Contactame/>
      <Footer/>
    </div>
  );
};

export default Home;
