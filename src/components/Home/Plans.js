import React from 'react';
import style from './Plans.module.css';
import { json } from './json';
import yes from '../../assets/svg/Check.svg';
import no from '../../assets/svg/false.svg';

function Home2() {
  console.log(json);
  return (
    <div className={style.main}>
      <div className={style.container}>
        <h2>Choose the best plan for you</h2>
        <div className={style.flex}>
          <div className={style.inFlex}><p>What you get</p><span /></div>
          <div className={style.inFlex}><p>for free</p><span /></div>
          <div className={style.inFlex}><p>in Pro</p><span /></div>
        </div>
        {
          json.map((card, index) => {
            console.log(card);
            return (
              <div className={style.map} key={index}>
                <h3>{card.title}</h3>

                {
                  card.desc.map((description, index) => {
                    return (
                      <div className={style.flex} key={index}>
                        <div className={style.inFlex}>{description.text}</div>
                        <div className={style.inFlex}><img src={description.free ? yes : no} alt="true" /></div>
                        <div className={style.inFlex}><img src={description.pro ? yes : no} alt="true" /></div>
                        {description.border ? <span className={style.borderBottom} /> : null}
                      </div>
                    );
                  })
                }

              </div>
            );
          })
        }
        <div className={style.buttons}>
          <button>go with the free version</button>
          <button>upgrade now</button>
        </div>
      </div>
    </div>
  );
}

export default Home2;