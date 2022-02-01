import React from "react";
import Nav from "../Navigation";

function Footer(props) {
	const { navLinks = [], setCurrentNavLink, currentNavLink } = props;

	return (
		<footer className="flex-row px-1 footer-main">
			<h2 className="footer-heading">Resourse Links</h2>
			<Nav
				navLinks={navLinks}
				setCurrentNavLink={setCurrentNavLink}
				currentNavLink={currentNavLink}
			></Nav>
		</footer>
	);
}

export default Footer;
