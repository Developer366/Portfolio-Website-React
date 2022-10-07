import React from 'react';

import movieProject from '../Images/MovieReviewWebsite.png';
import stockProject from '../Images/PoliticianStockTrades.PNG';
import todoProject from '../Images/TodoFlaskApp.PNG';
import QuizProject from '../Images/QuizWorld.PNG';
import Headshot from '../Images/headshot_whitebackground.jpeg';
import F500 from '../Images/F500-tableau.PNG';
import PowerBi from '../Images/webScrape-PowerBi.PNG';

import classes from "./WebApps.module.css";

export default function WebApps() {
  return (
    <div id="DA" className={classes['comp']}>
      <h1>Data Analysis Projects</h1>
      <div  className={classes['grid-container']}>
      
          <a href="https://public.tableau.com/app/profile/kamil.peza/viz/GlobalFortune500Analysis/Story1" target="_blank">
            <div className={classes['grid-item']}>
            <p className={classes.pname}>Fortune 500 Company Analysis - Tableau</p>
              <img src={F500} /> 
            </div>
          </a>

          <a href="https://github.com/Developer366/Web_Scrapping_Cities" target="_blank">
            <div className={classes['grid-item']}>
              <p className={classes.pname}>Web Scrape + PowerBi</p>
              <img src={PowerBi} /> 
            </div>
          </a>

          {/* <a href="https://taskmasterr.herokuapp.com/" target="-blank">
            <div className={classes['grid-item']}>
              <p className={classes.pname}>ToDo Flask App</p>
              <img src={todoProject} />
            </div>
          </a> */}
          
          {/* <a href="https://boring-kalam-9b5557.netlify.app/" target="-blank">
          <div className={classes['grid-item']}>
              <p className={classes.pname}>ToDo Flask App</p>
              <img src={QuizProject} />
            </div>
          </a> */}

      </div>
  </div>
  )
}
