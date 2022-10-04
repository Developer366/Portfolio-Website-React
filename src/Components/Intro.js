import React from 'react'
import classes from './Intro.module.css';
import Headshot from '../Images/headshot_whitebackground.jpeg';

export default function Intro() {
  return (
    <div id="Intro" className={classes['grid-container']}>
            <div className={classes['grid-item']}>
          {/* <img src="https://www.w3schools.com/howto/img_avatar.png"></img> */}
          <img className = {classes.Headshot} src={Headshot}></img>
        </div>

        <div className={classes['grid-item']}>
          <p className={classes.quote}>Hello, my name is Kamil Peza. I live in NYC. I graduated From Saint John's University with a Bachelors of Science in Computer Science.  This is my portfolio website. Here I showcase some of my Data Analysis Projects and my Web Application Projects.  </p>
        </div>

    </div>
  )
}
