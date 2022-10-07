import React from 'react'

import Intro from "../Components/Intro.js";
import WebApps from "../Components/WebApps.js";
import DA from "../Components/DA.js";
import AboutMe from "../Components/AboutMe.js";


export default function Home() {
  return (
    <div>
        <Intro/>
        <WebApps/>
        <DA/>
        <AboutMe/>
    </div>
  )
}
