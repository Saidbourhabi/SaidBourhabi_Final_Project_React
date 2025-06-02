import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
      
    </>
  );
};

export default App;