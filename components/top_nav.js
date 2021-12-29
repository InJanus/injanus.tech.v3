//need to make a top bar to use
import Image from 'next/image'
import profileImg from '../public/img/profile.jpg'
import React from 'react';
import Link from 'next/link'

export default function Top_Nav() {
    return(
      <div>
        <div className="topNav">
          <div className="wrapper">
            <div className="cornnerimg">
              <Image src={profileImg}/>
            </div>
            <div className="buttons">
              <Link href="/">Home</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/experience">Experience</Link>
              <Link href="/resume">Resume</Link>
            </div>
          </div>
        </div>
    </div>
    );
  }