import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";

import classes from "./NavBar.module.css";

import ErrorPage from "../Pages/ErrorPage.js";
// import Portfolio from "../Pages/Portfolio.js";

// const About = React.lazy(() => import("../Pages/About.js"));
const Portfolio = React.lazy(() => import("../Pages/Portfolio"));
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
				{/* <nav className={classes.NavBar}> */}
					<button onClick={toggleNav} className={classes.btn}><ReorderIcon /></button>

					{(toggleMenu || screenWidth > 600) && (// whether button it toggled or links dissapear
						<ul className={classes.List}>

							<Link to="/" className={classes.Link}>My Projects</Link>
							<Link to="/AboutMe" className={classes.Link}>About Me</Link>
							<Link to="/ContactMe" className={classes.Link}>Contact Me</Link>

						</ul>
					)}
				{/* </nav> */}

				<Routes>
					<Route path="/" element={<Portfolio />} />

					<Route path="*" element={<ErrorPage />} />
				</Routes>

			</Suspense>
		</div>
	); //end of functional component 
}


