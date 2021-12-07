import React from 'react';
import './app.css';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import Blik from './components/Blik';

const App = () => {
  return (
    <div className='background'>
      <Navbar />
      <Home />
      <Footer />
      <Blik />
    </div>
  );
};

export default App;
