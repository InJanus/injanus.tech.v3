import Top_Nav from "../components/top_nav";
import Link from 'next/link'
import { API_URL, LOCAL_URL } from "../public/properties"; //import api link
import style from '../styles/projects.module.css'
import Project_Card from "../components/project_card";

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
        items.push(<Project_Card name={index.title} imgdes1={index.des1} imgdes2={index.des2} dis={index.discription} link={LOCAL_URL + "/projects/" + index.project_name} img1={API_URL + "/project_img/" + index.project_name + "/0.png"} img2={API_URL + "/project_img/" + index.project_name + "/1.png"}></Project_Card>);
    }
    return(
        <div>
            <Top_Nav></Top_Nav>
            <div className="content">
                    <div className="center">
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
        </div>
    );
}