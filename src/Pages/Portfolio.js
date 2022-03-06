import React from 'react';

import classes from "./Portfolio.module.css";

export default function Portfolio() {
  return (
    <div className={classes['grid-container']}>
        <div className={classes['grid-item']}><img src="https://www.w3schools.com/howto/img_avatar.png"></img></div>
        <div className={classes['grid-item']}><p>Hello, my name is Kamil Peza. This is my portfolio website. Here are some of my projects.</p></div>
        <div className={classes['grid-item']}>Project 1</div>
        <div className={classes['grid-item']}>Project 2</div>
        <div className={classes['grid-item']}>Project 3</div>
        <div className={classes['grid-item']}>Project 4</div>
       
    </div> //end of grid container
  )
}
