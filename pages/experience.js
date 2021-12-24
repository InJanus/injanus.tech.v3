import Image from 'next/image'
import testimg from '../public/testimage400x400.jpg'

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
        <div class="expage">
            <div class="topgrid">
                <h1 class="item">{props.company}</h1>
                <p class="item right">{props.start_date} - {props.end_date}</p>
            </div>
            <div class="excontent">
                <div class="exoutline">
                    <div class="content imgsize">
                        <Image src={testimg}/>
                    </div>
                </div>
                <div class="exmargin">
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

export default function experience(){
    return(
        <div className="input_area">
            {/* <div>experience page</div> */}
            <Experience_card_left company="Siemens 1st Rotation" start_date="Feb 10, 2000" end_date="Feb 10, 2000" title="Coop/Intern" function="Develop internal angular app for sales team." duties="Implement new"></Experience_card_left>
            <div class="breakline"></div>
            <Experience_card_left company="Siemens 2nd Rotation"></Experience_card_left>
            <div class="breakline"></div>
            <Experience_card_left company="Siemens 3rd Rotation"></Experience_card_left>
            <div class="breakline"></div>
            <Experience_card_left company="ITI 4th Rotation"></Experience_card_left>
            <div class="breakline"></div>
            <Experience_card_left company="ITI 5th Rotation"></Experience_card_left>
        </div>
    );
}