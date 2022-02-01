import React from "react";

function Contact({ currentNavLink }) {
	if (currentNavLink === "Contact") {
		
		return <>

		<section className="contact-section-main">


		<div className="contact-main">
			<h1 className="contact-h1">Contact Me</h1>

			<p className="contact-text"> If you have any questions, comments, or requests for colabs, you can find me on these applications below.</p>
				<ul className="contact-ul">
					<a href="github.com/ronj2005" className="contact-link"><li className="contact-li"> Github: github.com/ronj2005</li></a>
					<a href="github.com/ronj2005" className="contact-link"><li className="contact-li"> Twitter: twitter.com/aaron_jones05 </li></a>
					<a href="github.com/ronj2005" className="contact-link"><li className="contact-li"> LinkedIn: linkedin.com/ronj2005</li></a>
					<a href="github.com/ronj2005" className="contact-link"><li className="contact-li"> Email: ronj2005@gmail.com</li></a>

				</ul>

		</div>


		</section>

		</>


	} else {
		return null;
	}
}

export default Contact;
