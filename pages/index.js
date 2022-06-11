//need to make a top bar to use
import React from 'react';
import Top_Nav from '../components/top_nav';
import Project_Card from '../components/project_card';
import { API_URL, LOCAL_URL } from "../public/properties"; //import api link
import style from '../styles/index.module.css';
import Link from 'next/link';

async function getProjects(project_name){
  const res = await fetch(API_URL + '/project/' + project_name);
  const data = await res.json();
  return data;
  
  //for this it will return an image with a link attached,
}

async function getSkills(){
  //just a general list of skills
  const res = await fetch(API_URL + '/get_skills');
  const data = await res.json();
  return data;
}

function connectionList(data){
  const list = [];
  let i = 0;
  while(data['connection_link' + i]){
    list.push(<a key={i} href={data['connection_link' + i]} className={style.connection_img}><img src={API_URL + '/connection_img/' + i + '.png'}/></a>);
    i++;
  }
  return list;
}

export async function getServerSideProps() {
  const res = await fetch(API_URL + '/home');
  const data = await res.json();

  const project1 = await getProjects(data[0].project1);
  const project2 = await getProjects(data[0].project2);
  const skills = await getSkills();
  return {
    props: { 
      data,
      project1,
      project2,
      skills
    }, // will be passed to the page component as props
  }
}

export default function Index({ data, project1, project2, skills }){
    //discription
    //name
    //projects (name, pictures, )
    //skills (name of skill, link to project via id

    // things to get fromt the api.
      //profile image
      // links to social media with pictures of each one and discriptions
      // two sample projects
      // list of skills
    let skills_html = [];
    for(const skill of skills){
      skills_html.push(<Link key={skill} href={LOCAL_URL + '/projects?skills=' + skill}><a className={style.skill_card}><b>{skill.toUpperCase()}</b></a></Link>)
    }

    const connections = connectionList(data[0]);
    return(
      <div className='content'>
        <Top_Nav></Top_Nav>
        <div className='center'>
          <div className={style.header_padding}><b>{data[0].name}</b></div>
          <div className={style.topIMG}>
            <div className={style.main_img}><img src={API_URL + '/home_img/profile.png'}/></div>
            <div className={style.connections}>
              {/* list of connections to diffrent outlets
              email, github, linked in, facebook?,  */
              // this needs to be looped as well to get it to work with multiple connections
              }
                {connections}
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
              <div className={style.skill_list}>{skills_html}</div>
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