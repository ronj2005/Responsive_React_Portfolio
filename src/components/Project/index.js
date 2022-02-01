import React from "react";
// import Placeholder from '../images/placeholder';

function Project({ currentNavLink }) {
	if (currentNavLink === "Portfolio") {
		return <>
		<section className="section-main">
		
		<div className="project-main">
			<h1 className="project-title"> Welp Reviews </h1>
				<p className="project-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<a href="google.com"><div className="project-image"></div></a>
		</div>

		<div className="project-main">
			<h1 className="project-title"> All-Star Basketball App </h1>
				<p className="project-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<a href="google.com"><div className="project-image"></div></a>
		</div>

		<div className="project-main">
			<h1 className="project-title"> Hand Note Taker </h1>
			<p className="project-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<a href="google.com"><div className="project-image"></div></a>
		</div>

		<div className="project-main">
			<h1 className="project-title">Responsive Text Editor </h1>
			<p className="project-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<a href="google.com"><div className="project-image"></div></a>
		</div>

		<div className="project-main">
			<h1 className="project-title">Simpson CSS Block Art</h1>
			<p className="project-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<a href="google.com"><div className="project-image"></div></a>
		</div>

		<div className="project-main">
			<h1 className="project-title"> API Weather App</h1>
			<p className="project-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<a href="google.com"><div className="project-image"></div></a>
		</div>



		</section>
		</>
	} else {
		return null;
	}
}

export default Project;
