import React from 'react'
import style from './style.module.css'
import logo from '../assets/image/welltory.png'

const Navbar = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <img alt='image' src={logo} />
      </div>

    </div>
  )
}

export default Navbar
