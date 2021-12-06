import React from 'react';
import style from './components/blik.module.css';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import Blik from './components/Blik';

const App = () => {
  return (
    <div className={style.background}>
        <Navbar />
        <Home />
        <Footer />
      <Blik />
    </div>
  );
};

export default App;
