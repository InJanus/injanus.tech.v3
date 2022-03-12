//need to make a top bar to use
import React from 'react';
import Top_Nav from '../components/top_nav';
import Project_Card from '../components/project_card';
import { API_URL, LOCAL_URL } from "../public/properties"; //import api link
import style from '../styles/index.module.css';

// temporary
import Image from 'next/image'
import profileImg from '../public/img/profile.jpg'


async function getConnections(){
  const res = await fetch(API_URL + '/home/connections');
  await res.json().then(data => {
    return data;
  });
  //for this it will return an image with a link attached,
}

async function getSkills(){
  const res = await fetch(API_URL + '/home/connections');
  await res.json().then(data => {
    return data;
  });
}

export async function getStaticProps() {
  const res = await fetch(API_URL + '/home');
  const data = await res.json().then();

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default function Index({ data }){
    //discription
    //name
    //projects (name, pictures, )
    //skills (name of skill, link to project via id

    // things to get fromt the api.
      //profile image
      // links to social media with pictures of each one and discriptions
      // two sample projects
      // list of skills
    console.log(data);
    getConnections();
    var index = {
      title: "test",
      des1: "test",
      des2: "test",
      discription: "test",
    }
    return(
      <div className='content'>
        <Top_Nav></Top_Nav>
        <div className='center'>
          <div className={style.header_padding}><b>Brian Culberson</b></div>
          <div className={style.topIMG}>
            <div className={style.main_img}><Image src={profileImg}/></div>
            <div className={style.connections}>
              {/* list of connections to diffrent outlets
              email, github, linked in, facebook?,  */}
                <div className={style.connection_img}><Image src={profileImg}></Image></div>
                <div className={style.connection_img}><Image src={profileImg}></Image></div>
                <div className={style.connection_img}><Image src={profileImg}></Image></div>
            </div>
          </div>
          <div className='breakline'></div>
          <div className={style.summary}>
            <p>Summary</p>
          </div>
          <div className='breakline'></div>
          <div className={style.skills_projects}>
            <div className={style.skills}>
              <h2><b>Skills</b></h2>
              {/* list of skills */}
            </div>
            <div className={style.projects}>
              <h2><b>Projects</b></h2>
              <div className={style.project_cards}>
                <div className={style.project_card}>
                  <Project_Card name={index.title} imgdes1={index.des1} imgdes2={index.des2} dis={index.discription} link={LOCAL_URL + "/projects/" + index.project_name} img1={API_URL + "/project_img/" + index.project_name + "/0.png"} img2={API_URL + "/project_img/" + index.project_name + "/1.png"}></Project_Card>
                </div>
                <div className={style.project_card}>
                  <Project_Card name={index.title} imgdes1={index.des1} imgdes2={index.des2} dis={index.discription} link={LOCAL_URL + "/projects/" + index.project_name} img1={API_URL + "/project_img/" + index.project_name + "/0.png"} img2={API_URL + "/project_img/" + index.project_name + "/1.png"}></Project_Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }