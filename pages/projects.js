import Top_Nav from "../components/top_nav";
import Link from 'next/link'
import { API_URL } from "../public/properties"; //import api link
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
            <a className={style.link_bottom} href={props.link}><b>See more</b></a>
        </div>
    );
}

export default function Projects(){
    return(
        <div>
            <Top_Nav></Top_Nav>
            <div className="content">
                    <div className={style.splitlist}>
                        <ProjectCard name="Testname" imgdes1="imgdes1" img1={API_URL + "/experience_img/0.png"} imgdes2="imgdes2" img2={API_URL + "/experience_img/0.png"} dis="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." link="/"></ProjectCard>
                        <ProjectCard name="Testname" imgdes1="imgdes1" img1={API_URL + "/experience_img/0.png"} imgdes2="imgdes2" img2={API_URL + "/experience_img/0.png"} dis="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." link="/"></ProjectCard>
                    </div>
                    <div className={style.splitlist}>
                        <ProjectCard name="Testname" imgdes1="imgdes1" img1={API_URL + "/experience_img/0.png"} imgdes2="imgdes2" img2={API_URL + "/experience_img/0.png"} dis="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." link="/"></ProjectCard>
                        <ProjectCard name="Testname" imgdes1="imgdes1" img1={API_URL + "/experience_img/0.png"} imgdes2="imgdes2" img2={API_URL + "/experience_img/0.png"} dis="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." link="/"></ProjectCard>
                    </div>
                </div>
        </div>
    );
}