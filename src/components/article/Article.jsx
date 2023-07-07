import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


const Article = (props) => {
	const { date, title, description, link } = props;

	return (
		<React.Fragment>
			<div className="flex gap-2">
				<div className="">
					<div className="text-sm text-gray-100">{date}</div>
				</div>

				<Link to={link}>
					<div className="">
						<div className="font-bold">{title}</div>
						<div className="text-gray-100 text-sm pt-3">{description}</div>
						<div className="text-sm pt-2 text-green-400">
							Read Article{" "}
							<FontAwesomeIcon
								className="text-xs"
								icon={faChevronRight}
							/>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Article;


Article.propTypes = {
    date: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string
  };
  