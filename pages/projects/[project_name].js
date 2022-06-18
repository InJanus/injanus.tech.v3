import Top_Nav from "../../components/top_nav";
import { API_URL, LOCAL_URL } from "../../public/properties";
import style from "../../styles/project_name.module.css";
import Link from 'next/link';

function Post ({ data, imgCount }){
  // console.log(data);
  //for this page it needs to implement all of the pictures
  //title, discription and what i learned from it
  //as well as tags to related skills and file uploads
  //this is going to be the hardest part and a lot of backend work in python

  {/* these might get to be modal images if i can figure out how to do it */}
              {/* what i am looking for is to just get a bigger version of the images but i dont want it to show from the api */}
              {/* modal images is a good way to show a larger image without getting rid of  */}
              {/* for right now it links to the api. i want to change this but this wont stop me from pushing the website without it */}

  let pic_list = [];
  for (let index = 0; index < imgCount.count; index++){
    pic_list.push(<div className={style.contentincard}>
      <div className={style.imgsize}>
        <Link href={API_URL + "/project_img/" + data.project_name + "/" + index + ".png"} target="_blank "><img src={API_URL + "/project_img/" + data.project_name + "/" + index + ".png"}></img></Link>
      </div>
      <div className={style.imgdes}>{data["des" + String(index+1)]}</div>
      </div>)
  }

  let skills_list = [];
  for (const index of data.skills.split(";")){
    skills_list.push(<Link key={index} href={LOCAL_URL + '/projects?skills=' + index}><a className={style.skill_card}><b>{index.toUpperCase()}</b></a></Link>);
  }

  let mylinks = [];
  for(const index of data.links.split(";")){
    console.log(index);
    mylinks.push(<li><a className={style.link_hover} href={index} target="_blank">{index}</a></li>);
  }
  if(data.links != "NOLINK"){
    mylinks = <div className={style.text}>
      <div className={style.title}>Links</div>
      <ul>
        {mylinks}  
      </ul>
    </div>
  }
  
  console.log(data);
  return (
    <div className="content">
      <Top_Nav></Top_Nav>
      <div className="center">
        <div>
          <h1 className={style.title}><b>{data.title}</b></h1>
          <div className={style.date}>{data.date}</div>
          <div className={style.skills}>{skills_list}</div>
          <div className={style.centered_img}>
            <div className={style.myimgs}>
              {pic_list}
            </div>
          </div>
          <div className="breakline"></div>
          <div className={style.text_block}>
            <div className={style.text}>
              <div className={style.title}>Discription</div>
              <div>{data.discription}</div>
            </div>
            <div className={style.text}>
              <div className={style.title}>Lessons Learned</div>
              <div>{data.learned}</div>
            </div>
            {mylinks}
          </div>
        </div>
      </div>
    </div>
  );
}

async function getImgCount(project_name){
  //just a general list of skills
  const res = await fetch(API_URL + '/project/img_count/' + project_name);
  const data = await res.json();
  return data;
}

export async function getStaticPaths() {
    //need a way to get all the project names for the project pages
    //this is just an api call for all the project names
    const res = await fetch(API_URL + '/project/project_names')
    const data = await res.json();
    
    const project_names = data.map((myrows) => ({
      params: {project_name: myrows.project_name},
    }))

    return {
      paths: project_names,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    // console.log(params);
    // const postData = getPostData(params.id);
    // const res = await fetch(API_URL + '/project/project1');
    // const data = await res.json();


    const res = await fetch(API_URL + '/project/' + params.project_name)
    const data = await res.json();

    const imgCount = await getImgCount(data.project_name);
    return {
      props: { data, imgCount }, // will be passed to the page component as props
    }
}

export default Post;