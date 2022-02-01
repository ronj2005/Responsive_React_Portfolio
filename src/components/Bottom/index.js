import React, { useState, useEffect } from "react";

function Nav(props) {
	const { navLinks = [], setCurrentNavLink, currentNavLink } = props;

	return (
		<nav className="nav-main">
			<ul className="flex-row link-list">
				{navLinks.map((tab) => (
					<li className="mx-1 nav-link" key={tab}>
						<span
							onClick={() => {
								setCurrentNavLink(tab);
								console.log(tab);
							}}
						>
							{tab}
						</span>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Nav;