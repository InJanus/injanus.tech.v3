//need to make a top bar to use
import Image from 'next/image'
import profileImg from '../public/img/profile.jpg'
import React from 'react';
import style from '../styles/top_nav.module.css'

export default function Top_Nav() {
    return(
      <div>
        <div className={style.topNav}>
          <div className={style.wrapper}>
            <div className={style.cornnerimg}>
              <Image src={profileImg}/>
            </div>
            <div>
              <a href="/" className={style.buttons}>Home</a>
              <a href="/projects" className={style.buttons}>Projects</a>
              <a href="/experience" className={style.buttons}>Experience</a>
              <a href="/resume" className={style.buttons}>Resume</a>
            </div>
          </div>
        </div>
    </div>
    );
  }