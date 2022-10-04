import React from 'react'

import Intro from "../Components/Intro.js";
import WebApps from "../Components/WebApps.js";
import AboutMe from "../Components/AboutMe.js";

export default function Home() {
  return (
    <div>
        <Intro/>
        <WebApps/>
        <AboutMe/>
    </div>
  )
}
