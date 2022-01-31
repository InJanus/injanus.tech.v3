import Top_Nav from "../components/top_nav";
import Link from 'next/link'
import { API_URL, LOCAL_URL } from "../public/properties"; //import api link
import style from '../styles/projects.module.css'

function ProjectCard(props){
    //check notes for the Project card. i should finish this first before you work on the home page
    //needs a name
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

export async function getStaticProps() {
    const res = await fetch(API_URL + '/project/get_project_card');
    const data = await res.json();
    
    return {
      props: { data }, // will be passed to the page component as props
    }
}

export default function Projects({ data }){
    const half = (data.length)/2;
    const items = [];

    for(const index of data){
        items.push(<ProjectCard name={index.title} imgdes1={index.des1} imgdes2={index.des2} dis={index.discription} link={LOCAL_URL + "/projects/" + index.project_name} img1={API_URL + "/project_img/" + index.project_name + "/0.png"} img2={API_URL + "/project_img/" + index.project_name + "/1.png"}></ProjectCard>);
    }
    return(
        <div>
            <Top_Nav></Top_Nav>
            <div className="content">
                    <div className={style.splitlist}>
                        {items.slice(0, half)}
                        {/* <ProjectCard name="Testname" imgdes1="imgdes1" img1={API_URL + "/experience_img/0.png"} imgdes2="imgdes2" img2={API_URL + "/experience_img/0.png"} dis="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." link="/"></ProjectCard>
                        <ProjectCard name="Testname" imgdes1="imgdes1" img1={API_URL + "/experience_img/0.png"} imgdes2="imgdes2" img2={API_URL + "/experience_img/0.png"} dis="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." link="/"></ProjectCard> */}
                    </div>
                    <div className={style.splitlist}>
                        {items.slice(-half)}
                        {/* <ProjectCard name="Testname" imgdes1="imgdes1" img1={API_URL + "/experience_img/0.png"} imgdes2="imgdes2" img2={API_URL + "/experience_img/0.png"} dis="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." link="/"></ProjectCard>
                        <ProjectCard name="Testname" imgdes1="imgdes1" img1={API_URL + "/experience_img/0.png"} imgdes2="imgdes2" img2={API_URL + "/experience_img/0.png"} dis="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." link="/"></ProjectCard> */}
                    </div>
                </div>
        </div>
    );
}