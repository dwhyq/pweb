import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

import NavBar from "../../components/navbar/NavBar";
import INFO from "../../data/info";


const Notfound = () => {
	useEffect(() => {
		document.title = `404 | ${INFO.main.title}`;
	}, []);

	return (
		<div>
			<div className="flex flex-col min-h-screen">
				<NavBar />
				<div className="flex flex-col flex-grow">
					<div className="flex flex-col m-auto pt-7">
						<div className="font-bold text-5xl text-center">
							Oops!{" "}
							<FontAwesomeIcon
								icon={faFaceSadTear}
								className="text-red-500 animate__animated animate-bounce"
							/>
						</div>
						<div className="text-center pt-10 md:w-3/4 md:m-auto">
							Sorry! I can not seem to find the page you are looking
							for. The requested URL {window.location.href} was
							not found on this server.
						</div>
						
					</div>
					<Link
							to="/"
							className="text-white bg-green-600 w-fit m-auto rounded-full p-2 animate__animated animate-pulse font-bold"
						>
							Go back to home page
						</Link>
				</div>
			</div>
		</div>
	);
};

export default Notfound;
