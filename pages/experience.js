import Top_Nav from '../components/top_nav.js'
import { API_URL } from "../public/properties";
import style from '../styles/experience.module.css'

function Experience_card_left(props){ //make sure component names are uppaercase 
    //these also have to have the argument props to work with properties
    //for this needs to be an repeatable card of data
    //info needed-
        //picture
        //company
        //job title
        //job functions
        //start date
        //end date
    //for right now

    return(
        <div className={style.expage}>
            <div className={style.topgrid}>
                <h1 className={style.item}>{props.company}</h1>
                <p className={style.itemright}>{props.start_date} - {props.end_date}</p> 
            </div>
            <div className={style.excontent}>
                <div className={style.exoutline}>
                    <div className={style.imgsize}>
                        <img src={props.img}/>
                    </div>
                </div>
                <div className={style.exmargin}>
                    <span>Title: {props.title}</span>
                    <br/>
                    <span>Discription: {props.function}</span>
                    <br/>
                    <span>Job Duties: {props.duties}</span>  
                </div>
            </div>
        </div>
    );
}



export async function getStaticProps() {
    const res = await fetch(API_URL + '/experience');
    const data = await res.json();
    return {
      props: { data }, // will be passed to the page component as props
    }
}

export default function experience({ data }){
    const items = [];
    for(const index of data){
        // console.log(API_URL + '/experience_img/' + index.myindex + '.png');
        items.push(<Experience_card_left company={index.company} start_date={index.start_date} end_date={index.end_date} title={index.title} function={index.function} duties={index.duties} img={API_URL + '/experience_img/' + index.myindex + '.png'}></Experience_card_left>);
        items.push(<div className="breakline"></div>);
    }
    return(
        <div>
            <Top_Nav></Top_Nav>
            <div className="content input_area">
                <div className="center">
                    {items}
                </div>
            </div>
        </div>
    );
}

