import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import { HashLink } from 'react-router-hash-link';

import classes from "./NavBar.module.css";
import ErrorPage from "../Pages/ErrorPage.js";
import Footer from "./Footer.js";
import Home from '../Pages/Home.js';
// import Portfolio from "../Pages/Portfolio.js";

// const About = React.lazy(() => import("../Pages/About.js"));
const Portfolio = React.lazy(() => import("./WebApps"));
const AboutMe = React.lazy(() => import("./AboutMe"));
// const Reps = React.lazy(() => import("../Pages/Representatives/Reps.js"));
// const RepInfo = React.lazy(() => import("../Pages/Representatives/RepInfo.js"));
// const RepsTransactionList = React.lazy(() =>
// 	import("../Pages/Representatives/RepsTransactionList")
// );

// const Senators = React.lazy(() => import("../Pages/Senators/Senators.js"));
// const SenatorInfo = React.lazy(() =>
// 	import("../Pages/Senators/SenatorInfo.js")
// );
// const SenatorTransactionList = React.lazy(() =>
// 	import("../Pages/Senators/SenatorTransactionList.js")
// );

// const ErrorPage = React.lazy(() => import("../Pages/ErrorPage.js"));

// Handler for toggling the navbar hamburger icon
//const [toggleMenu, setToggleMenu] = useState(false);

// document.getElementById("Hamburger").addEventListener("click", NavBarToggle);

export default function NavBar() {
	// showlinks, close the links
	const [toggleMenu, setToggleMenu] = useState(false); //show the toggle button
	const [screenWidth, setScreenWidth] = useState(window.innerWidth); //detect the screen width

	//open and close navbar, toggle the menu upon clicking
	const toggleNav = () => {
		console.log("clicked toggle");
		setToggleMenu(!toggleMenu);
	};

	useEffect(() => {//triggered once component has finished mounting, which triggers callback functions
		const changeWidth = () => {
			setScreenWidth(window.innerWidth);
		};
		window.addEventListener('resize', changeWidth);

		return () => {
			window.removeEventListener('resize', changeWidth);
		};
	}, []);

	return (
		<div>
			<Suspense fallback={<p>Loading...</p>}>

			<nav className={classes.NavBar}>
				<button onClick={toggleNav} className={classes.btn}><ReorderIcon /></button>

				{(toggleMenu || screenWidth > 600) && (// whether button it toggled or links dissapear
					
						<ul className={classes.List}>
				
							<HashLink smooth to="/#Intro" className={classes.Link}>Intro</HashLink>
							<HashLink smooth to="/#DataAnalysis" className={classes.Link}>Data Analysis Projects</HashLink>
							<HashLink smooth to="/#WebApps" className={classes.Link}>Web Applications</HashLink>
							<HashLink smooth to="/#AboutMe" className={classes.Link}>About Me</HashLink>

						</ul>
				)}
			</nav>  
			
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<ErrorPage />} />
					{/* <Route path="/AboutMe" element={<AboutMe />} />
					<Route path="/Footer" element={<Footer />} />
					<Route path="/AboutMe" element={<AboutMe />} /> */}
					
				</Routes>

			</Suspense>
		</div>
	); //end of functional component 
}


