//need to make a top bar to use
import Link from 'next/link';
import React from 'react';
import style from '../styles/top_nav.module.css'

export default function Top_Nav() {
    return(
      <div>
        <div className={style.topNav}>
          <div className={style.wrapper}>
            <div className={style.cornnerimg}>
              <img src={API_URL + '/home_img/profile.png'}/>
            </div>
            <div>
              <Link href="/" className={style.buttons}>Home</Link>
              <Link href="/projects" className={style.buttons}>Projects</Link>
              <Link href="/experience" className={style.buttons}>Experience</Link>
              <Link href="/resume" className={style.buttons}>Resume</Link>
            </div>
          </div>
        </div>
    </div>
    );
  }