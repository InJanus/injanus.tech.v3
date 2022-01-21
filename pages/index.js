//need to make a top bar to use
import React from 'react';
import Top_Nav from '../components/top_nav';

let API_URL = 'http://localhost:5000/api';

export async function getStaticProps() {
  const res = await fetch(API_URL + '/home');
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default function Index({ data }){
    //discription
    //name
    //projects (name, pictures, )
    //skills (name of skill, link to project via id)



    console.log(data);
    return(
      <div>
        <Top_Nav></Top_Nav>
        <div className='content'>
          <div className='header padding'><b>Brian Culberson</b></div>
          <div className='breakline'></div>
          <div>Summary Bio</div>
          <div className='breakline'></div>
          <div className='header'><b>Skills</b></div>
          <div className='breakline'></div>
        </div>
      </div>
    );
  }