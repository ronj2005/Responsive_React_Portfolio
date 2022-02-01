import React from "react";

function About({ currentNavLink }) {
	if (currentNavLink === "About Me") {
		return <>

		<section className="about-section-main">


		<div className="about-main">
			<h1 className="about-h1">About Me</h1>
				
				<div className="image-item"> </div>
				<p className="about-text">My name is Aaron Christopher Jones. I am an Atlanta based software engineer with a strong sense of community, 
					team cooperation and coordination. 
					My current interests are in developing web applications that adapt curriculum to functioning web applications. 
					I firmly believe in adapting to new concepts and difficult situations in order to create learning environments and resource guides for the future learners and educators.
				</p>	
					<ul className="skills-text"><h1>Languages:</h1>
						<li>Javascript </li>
						<li>Node </li>
						<li>MongoDB </li>
						<li>MSQL </li>
						<li>Express </li>
						<li>React </li>
					</ul>
		</div>


		</section>

		</>

	} else {
		return null;
	}
}

export default About;
