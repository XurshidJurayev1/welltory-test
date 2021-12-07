import React, { useState } from 'react';
import style from './cards.module.css';
import logo from '../../assets/image/image 86.png';

const Home1 = () => {
  const [click, setClick] = useState(true);
  return (
    <div className={style.main}>
      <div className={style.container}>
        <img src={logo} alt="logo" />
        <h2>
          Take better care of yourself every day
        </h2>
        <div className={style.cards}>
          <div
            className={click ? style.card : style.activeCard}
            // className={style.card}
            onClick={() => setClick(false)}>
            <p className={style.sale}><span />– 15%</p>
            <div className={style.flex}>
              <div className={style.name}>
                <p>Monthly</p>
              </div>
              <div className={style.price}>
                <p>$ 5.99</p>
                <p>$ 7.99</p>
              </div>
            </div>
            <p className={style.billed}>Billed every month</p>
          </div>
          <div
            className={click ? style.activeCard : style.card}
            onClick={() => setClick(true)}>
            <p className={style.sale}><span />– 25%</p>
            <div className={style.flex}>
              <div className={style.name}>
                <p>Annual</p>
              </div>
              <div className={style.price}>
                <p>$ 4.59</p>
                <p>$ 7.99</p>
              </div>
            </div>
            <p className={style.billed}>$79 billed once a year</p>
          </div>
        </div>
        <button>continue</button>
        <p className={style.commit}>No commitments. Cancel anytime</p>
      </div>
    </div>
  );
};

export default Home1;
