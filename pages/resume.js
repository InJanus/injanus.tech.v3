import Top_Nav from "../components/top_nav";
import React from 'react';
import style from '../styles/resume.module.css'

// import myresume from '../public/docs/ResumeV2.pdf';
// import { Document } from 'react-pdf/dist/esm/entry.webpack';
// import Resume from '../public/docs/ResumeV2.pdf';

export default function resume(){
    return(
        <div>
            <Top_Nav></Top_Nav>
            <div class={style.document}>
                <object data="../public/docs/ResumeV2.pdf" type="application/pdf" width="100%" height="100%"></object>
            </div>
        </div>
    );
}