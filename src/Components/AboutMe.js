import React from 'react';

import classes from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <div>
        <div className={classes['grid-container']}>
            <div className={classes['grid-item']}>
                <h1>General Interests & Hobbies</h1>
                    <ul className={classes.list}>
                        <li>PC Gaming</li>
                        <li>TV Shows & Movies</li>
                        <li>Basketball/NBA</li>
                        <li>Soccer</li>
                        <li>Learning to Cook</li>
                        <li>Playing Guitar</li>
                        <li>Listening to Music</li>
                        <li>Going to the Gym</li>
                        <li>Stock Trading</li>
                        <li>Cryptocurreny</li>
                        <li>Anime Shows</li>
                        <li>PC Building</li>
                        <li>Watching UFC</li>
                    </ul>
            </div>

            <div className={classes['grid-item']}>
                <h1>My Programming Skills</h1>
                <ul className={classes.list}>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>React.js</li>
                    <li>Python</li>
                    <li>Flask</li>
                    <li>Java (Beginner)</li>
                    <li>SQL:</li>
                    <li>[SQLite, MySQL]</li>
                    <li>AWS [RDS, Elastic Beanstalk]</li>
                </ul>
            </div>
        </div>

        <div>
            <h1>Favorite Song, Movie, TV Show, and Anime</h1>
            <div className={classes['grid-container']}>
                <div className={classes['grid-item']}>

                    <h1><a href="https://www.youtube.com/watch?v=XXYlFuWEuKI&ab_channel=TheWeekndVEVO" target="_blank">Save Your Tears</a></h1>
                    <h2>Artist: The Weeknd</h2>
                    <iframe width="600" height="400" src="https://www.youtube.com/embed/QDERSKqUOGg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>

                <div className={classes['grid-item']}>

                    <h1><a href="https://www.youtube.com/watch?v=8hP9D6kZseM" target="_blank">Inception</a></h1>
                    <h2>Director: Christopher Nolan</h2>
                    <iframe width="600" height="400" src="https://www.youtube.com/embed/8hP9D6kZseM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope picture-in-picture" allowfullscreen></iframe>

                </div>

                <div className={classes['grid-item']}>

                    <h1><a href="https://www.youtube.com/watch?v=HhesaQXLuRY" target="_blank">Breaking Bad</a></h1>
                    <h2> Creator: Vince Gilligan</h2>
                    <iframe width="600" height="400" src="https://www.youtube.com/embed/HhesaQXLuRY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope picture-in-picture" allowfullscreen></iframe>

                </div>

                <div className={classes['grid-item']}>
                    <h1><a href="https://www.youtube.com/watch?v=MGRm4IzK1SQ&feature=emb_logo&ab_channel=NIHONOMARU" target="_blank">Attack On Titan</a></h1>
                    <h2> Creator: Hajime Isayama</h2>
                    <iframe width="600" height="400" src="https://www.youtube.com/embed/MGRm4IzK1SQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>
            </div>
          
        </div>

    </div>

  )
}
