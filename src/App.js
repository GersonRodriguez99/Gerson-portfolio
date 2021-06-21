import React, { Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Search from './components/search/Search';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import"magnific-popup";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar/>
        <Banner/>
        <Search/>
        <Skills/>
        <Work/>
        <Gallery/>
        <Contact/>
        <Footer/>
      </Fragment>
    </Router>
  );
  
}



export default App;
