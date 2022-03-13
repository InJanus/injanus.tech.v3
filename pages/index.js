//need to make a top bar to use
import React from 'react';
import Top_Nav from '../components/top_nav';
import Project_Card from '../components/project_card';
import { API_URL, LOCAL_URL } from "../public/properties"; //import api link
import style from '../styles/index.module.css';

// temporary
import Image from 'next/image'
import profileImg from '../public/img/profile.jpg'


async function getProjects(project_name){
  const res = await fetch(API_URL + '/project/' + project_name);
  const data = await res.json();
  return data;
  
  //for this it will return an image with a link attached,
}

// async function getSkills(){
//   const res = await fetch(API_URL + '/home/connections');
//   await res.json().then(data => {
//     return data;
//   });
// }

export async function getStaticProps() {
  const res = await fetch(API_URL + '/home');
  const data = await res.json();

  const project1 = await getProjects(data[0].project1);
  const project2 = await getProjects(data[0].project2);
  return {
    props: { 
      data,
      project1,
      project2
    }, // will be passed to the page component as props
  }
}

export default function Index({ data, project1, project2 }){
    //discription
    //name
    //projects (name, pictures, )
    //skills (name of skill, link to project via id

    // things to get fromt the api.
      //profile image
      // links to social media with pictures of each one and discriptions
      // two sample projects
      // list of skills
    
    return(
      <div className='content'>
        <Top_Nav></Top_Nav>
        <div className='center'>
          <div className={style.header_padding}><b>{data[0].name}</b></div>
          <div className={style.topIMG}>
            <div className={style.main_img}><img src={API_URL + '/home_img/profile.png'}/></div>
            <div className={style.connections}>
              {/* list of connections to diffrent outlets
              email, github, linked in, facebook?,  */}
                <a href={data[0].connection_link1} className={style.connection_img}><img src={API_URL + '/connection_img/0.png'}/></a>
                <a href={data[0].connection_link2} className={style.connection_img}><img src={API_URL + '/connection_img/1.png'}/></a>
                <a href={data[0].connection_link3} className={style.connection_img}><img src={API_URL + '/connection_img/2.png'}/></a>
            </div>
          </div>
          <div className='breakline'></div>
          <div className={style.summary}>
            <p>{data[0].summary}</p>
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
                  <Project_Card name={project1.title} imgdes1={project1.des1} imgdes2={project1.des2} dis={project1.discription} link={LOCAL_URL + "/projects/" + project1.project_name} img1={API_URL + "/project_img/" + project1.project_name + "/0.png"} img2={API_URL + "/project_img/" + project1.project_name + "/1.png"}></Project_Card>
                </div>
                <div className={style.project_card}>
                  <Project_Card name={project2.title} imgdes1={project2.des1} imgdes2={project2.des2} dis={project2.discription} link={LOCAL_URL + "/projects/" + project2.project_name} img1={API_URL + "/project_img/" + project2.project_name + "/0.png"} img2={API_URL + "/project_img/" + project2.project_name + "/1.png"}></Project_Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }