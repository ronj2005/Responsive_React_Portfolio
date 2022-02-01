import React from "react";
// import Placeholder from '../images/placeholder';

function Project({ currentNavLink }) {
	if (currentNavLink === "Portfolio") {
		return <>
		<section className="section-main">
		
		<div className="project-main">
			<h1 className="project-title"> Welp Reviews </h1>
				<img className="project-item" id="image01" placeholder="image"></img>
				<p className="project-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<a href="google.com"><div className="project-image"></div></a>
		</div>

		<div className="project-main">
			<h1 className="project-title"> All-Star Basketball App </h1>
			<img className="project-item" id="image02" placeholder="image"></img>
				<p className="project-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<a href="google.com"><div className="project-image"></div></a>
		</div>

		<div className="project-main">
			<h1 className="project-title"> Handy004 Note Taker </h1>
			<img className="project-item" id="image03" placeholder="image"></img>
			<p className="project-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<a href="google.com"><div className="project-image"></div></a>
		</div>

		<div className="project-main">
			<h1 className="project-title">Responsive Text Editor </h1>
			<img className="project-item" id="image04" placeholder="image"></img>
			<p className="project-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<a href="google.com"><div className="project-image"></div></a>
		</div>

		<div className="project-main">
			<h1 className="project-title">Simpson CSS Block Art</h1>
			<img className="project-item" id="image05" placeholder="image"></img>
			<p className="project-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<a href="google.com"><div className="project-image"></div></a>
		</div>

		<div className="project-main">
			<h1 className="project-title"> API Weather App</h1>
			<img className="project-item" id="image06" placeholder="image"></img>
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
