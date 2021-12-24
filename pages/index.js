//need to make a top bar to use
import Image from 'next/image'
import profileImg from '../public/img/profile.jpg'
import Experience from './experience.js'
import React from 'react';

export default class NavConrol extends React.Component{
  constructor(props){
    super(props);
    this.homeclick = this.homeclick.bind(this);
    this.experienceclick = this.experienceclick.bind(this);
    this.state = {page_control: <div>test</div>};
  }

  homeclick(){
    // this.page_control = 'homepage!!!!!!!!!!!!';
    this.setState({page_control: <div>test2</div>});
  }

  experienceclick(){
    console.log("experience");
    this.setState({page_control: <Experience></Experience>});
  }

  render(){
    return(
      <div>
        <div className="topNav">
          <div className="wrapper">
            <div className="cornnerimg">
              <Image src={profileImg}/>
            </div>
            <div className="buttons">
              <div className="button" onClick={this.homeclick}>Home</div>
              <div className="button">Projects</div>
              <div className="button" onClick={this.experienceclick}>Experience</div>
              <div className="button">Resume</div>
            </div>
          </div>
        </div>
        <div className="content">
        {this.state.page_control}
        </div>
    </div>
    );
  }
}