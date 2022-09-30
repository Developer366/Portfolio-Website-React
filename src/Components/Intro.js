import React from 'react'
import classes from "./Intro.module.css";
import Headshot from '../Images/headshot_whitebackground.jpeg';

export default function Intro() {
  return (
    <div className={classes['grid-container']}>
            <div className={classes['grid-item']}>
          {/* <img src="https://www.w3schools.com/howto/img_avatar.png"></img> */}
          <img className = {classes.Headshot}src={Headshot}></img>
        </div>

        <div className={classes['grid-item']}>
          <p>Hello, my name is Kamil Peza. I live in Queens. I graduated From Saint John's University with a Bachelors of Science in Computer Science.  This is my portfolio website. I have a section for my Web App projects and another section for my Data Analyst Projects.</p>
        </div>

    </div>
  )
}
