import React from 'react';


import movieProject from '../Images/MovieReviewWebsite.png';
import stockProject from '../Images/PoliticianStockTrades.PNG';
import todoProject from '../Images/TodoFlaskApp.PNG';
import QuizProject from '../Images/QuizWorld.PNG';

import classes from "./Portfolio.module.css";


export default function Portfolio() {
  return (
    <div className={classes['grid-container']}>

        <div className={classes['grid-item']}>
          <img src="https://www.w3schools.com/howto/img_avatar.png"></img>
        </div>

        <div className={classes['grid-item']}>
          <p>Hello, my name is Kamil Peza. This is my portfolio website. Here are some of my projects.</p>
        </div>

        <a href="http://moviereview-env.eba-rq2nsua3.us-east-1.elasticbeanstalk.com/" target="_blank">
          <div className={classes['grid-item']}>
            <p>Movie Review App</p>
            <img src={movieProject} /> 
          </div>
        </a>

        <a href="https://politician-stock-trades.web.app/" target="_blank">
          <div className={classes['grid-item']}>
            <p>Politician Stock Trades</p>
            <img src={stockProject} /> 
          </div>
        </a>

        <a href="https://taskmasterr.herokuapp.com/" target="-blank">
          <div className={classes['grid-item']}>
            <p>ToDo Flask App</p>
            <img src={todoProject} />
          </div>
        </a>
        
        <a href="https://boring-kalam-9b5557.netlify.app/" target="-blank">
        <div className={classes['grid-item']}>
            <p>ToDo Flask App</p>
            <img src={QuizProject} />
          </div>
        </a>

       
    </div>
  )
}
