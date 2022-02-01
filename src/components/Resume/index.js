import React from "react";

function Resume({ currentNavLink }) {
	if (currentNavLink === "Resume") {
		
		return <>

		<section className="resume-section-main">


		<div className="resume-main">
			<a href="google.com" className="resume-link"><h1 className="resume-h1">Click here to view my Resume</h1></a>



		</div>


		</section>

		</>



	} else {
		return null;
	}
}

export default Resume;
