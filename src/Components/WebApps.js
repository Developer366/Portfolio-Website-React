import React from 'react';

import movieProject from '../Images/MovieReviewWebsite.png';
import stockProject from '../Images/PoliticianStockTrades.PNG';
import todoProject from '../Images/TodoFlaskApp.PNG';
import QuizProject from '../Images/QuizWorld.PNG';
import Headshot from '../Images/headshot_whitebackground.jpeg';

import classes from "./WebApps.module.css";

export default function WebApps() {
  return (
    <div className={classes['comp']}>
      <h1>Web Application Projects</h1>
      <div id="WebApps" className={classes['grid-container']}>
      

          <a href="http://moviereview-env.eba-rq2nsua3.us-east-1.elasticbeanstalk.com/" target="_blank">
            <div className={classes['grid-item']}>
            <p className={classes.pname}>Movie Review App</p>
              <img src={movieProject} /> 
            </div>
          </a>

          <a href="https://politician-stock-trades.web.app/" target="_blank">
            <div className={classes['grid-item']}>
              <p className={classes.pname}>Politician Stock Trades</p>
              <img src={stockProject} /> 
            </div>
          </a>

          <a href="https://taskmasterr.herokuapp.com/" target="-blank">
            <div className={classes['grid-item']}>
              <p className={classes.pname}>ToDo Flask App</p>
              <img src={todoProject} />
            </div>
          </a>
          
          <a href="https://boring-kalam-9b5557.netlify.app/" target="-blank">
          <div className={classes['grid-item']}>
              <p className={classes.pname}>ToDo Flask App</p>
              <img src={QuizProject} />
            </div>
          </a>

      </div>
  </div>
  )
}
