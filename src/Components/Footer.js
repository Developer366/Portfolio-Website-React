import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai';

import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={classes.Footer}>
        <p>Kamil Peza March &copy; 2022</p>
        <a href="https://github.com/Developer366">Github<AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/kamil-peza/">LinkedIn<AiFillLinkedin /></a>
        <p>Gmail<AiTwotoneMail /></p>
    </div>
  )
}
