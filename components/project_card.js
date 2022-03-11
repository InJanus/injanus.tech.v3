import React from 'react';
import style from '../styles/projects.module.css';
import Link from 'next/link';

export default function Project_Card(props){
    //check notes for the Project card. i should finish this first before you work on the home page
    //needs amyprojectcard name
    //two caption pictures
    //general discription
    //and a see more button to go to another page about the project(this will be a dynamic page so plz resarch this in next js)

    return(
        <div className={style.pcard}>
            <h1 className={style.title}>{props.name}</h1>
            <div className={style.grid_display}>
                <div className={style.contentincard}>
                    <div className={style.imgsize}><img src={props.img1}></img></div>
                    <div className={style.imgdes}>{props.imgdes1}</div>
                </div>
                <div className={style.contentincard}>
                    <div className={style.imgsize}><img src={props.img2}></img></div>
                    <div className={style.imgdes}>{props.imgdes2}</div>
                </div>
            </div>
            <div>
                <div className={style.discription_content}>{props.dis}</div>
            </div>
            <Link href={props.link}><a className={style.link_bottom}><b>See more</b></a></Link>
        </div>
    );
}