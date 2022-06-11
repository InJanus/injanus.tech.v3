import Top_Nav from "../components/top_nav";
import React from 'react';
import { API_URL } from "../public/properties"; //import api link

// import myresume from '../public/docs/ResumeV2.pdf';
// import { Document } from 'react-pdf/dist/esm/entry.webpack';
// import Resume from '../public/docs/ResumeV2.pdf';

export default function resume(){
    return(
        <div>
            <Top_Nav></Top_Nav>
            <div className="content">
                <object data={API_URL + "/get_resume/resume.pdf"} type="application/pdf" width="100%" height="1200px"></object>
            </div>
        </div>
    );
}