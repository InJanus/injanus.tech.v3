import Top_Nav from "../components/top_nav";
import React from 'react';
import { API_URL } from "../public/properties"; //import api link

export async function getServerSideProps() {}

export default function resume({ resume }){
    return(
        <div>
            <Top_Nav></Top_Nav>
            <div className="content">
                <object data={API_URL + "/get_resume/resume.pdf"} type="application/pdf" width="100%" height="1200px"></object>
            </div>
        </div>
    );
}