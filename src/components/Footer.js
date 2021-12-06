import React from 'react';
import style from './style.module.css';
import apple from '../assets/svg/app_store.png';
import play from '../assets/svg/google_play.svg';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerIn}>
        <div className={style.download}>
          <div className={style.mobile}>
            <p>Get the mobile app</p>
            <div>
              <a href="https://itunes.apple.com/app/welltory-personal-nyj-analitik/id1074367771?mt=8"
                 target="_blank" rel="noreferrer"><img src={apple} /></a>
              <a href="https://play.google.com/store/apps/details?id=com.welltory.client.android"
                 target="_blank" rel="noreferrer"><img src={play} /></a>
            </div>
          </div>
          <div className={style.policy}>
            <p><a href="https://welltory.com/terms/" target="_blank" rel="noreferrer">Terms of use</a> | <a
              href="https://welltory.com/privacy/" target="_blank" rel="noreferrer">Privacy police</a></p>
          </div>
        </div>
        <div className={style.links}>
          <a href="https://twitter.com/welltory " target="_blank" rel="noreferrer"><AiOutlineTwitter /></a>
          <a href="https://www.facebook.com/welltory " target="_blank" rel="noreferrer"><BsFacebook /></a>
          <a href="https://www.instagram.com/welltory/ " target="_blank" rel="noreferrer"><AiOutlineInstagram /></a>
          <a href="https://www.linkedin.com/company/welltory" target="_blank" rel="noreferrer"><IoLogoLinkedin /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
