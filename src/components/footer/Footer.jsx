import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="relative w-full">
				<div className="w-full bg-orange-500 flex flex-col justify-center mt-5 py-2">
					<ul className="flex flex-wrap justify-center gap-5 text-white">
						<li className="font-bold  text-white text-sm">
							<Link to="/">Home</Link>
						</li>
						<li className="font-bold  text-white text-sm">
							<Link to="/about">About</Link>
						</li>
						<li className="font-bold  text-white text-sm">
							<Link to="/projects">Projects</Link>
						</li>
						<li className="font-bold  text-white text-sm">
							<Link to="/articles">Articles</Link>
						</li>
						<li className="font-bold  text-white text-sm">
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
					<div className=" text-white p-2 text-sm text-center">
						© 2023 Ikenna.dev. All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
