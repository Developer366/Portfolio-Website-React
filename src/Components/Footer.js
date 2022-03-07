import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai';

import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={classes.Footer}>
        <p>Kamil Peza</p>
        <p>March &copy; 2022</p>
        <a href="https://github.com/Developer366" target="_blank"><AiFillGithub />Github</a> <br/><br/>
        <a href="https://www.linkedin.com/in/kamil-peza/" target="_blank"><AiFillLinkedin />LinkedIn</a><br/><br/>
        <a href="mailto:peza361@gmail.com" target="_blank"><AiTwotoneMail />Gmail: <br/>peza361@gmail.com</a>
    </div>
  )
}
