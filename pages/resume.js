import Top_Nav from "../components/top_nav";
import React from 'react';

// import myresume from '../public/docs/ResumeV2.pdf';
// import { Document } from 'react-pdf/dist/esm/entry.webpack';
// import Resume from '../public/docs/ResumeV2.pdf';

export default function resume(){
    const myresume = 'G:/injanus.tech/public/docs/ResumeV2.pdf'
    return(
        <div>
            <Top_Nav></Top_Nav>
            <div className="content">
                resume
            </div>
        </div>
    );
}