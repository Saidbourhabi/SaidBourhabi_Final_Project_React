import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Contact from './pages/contact/contact';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
      
    </>
  );
};

export default App;