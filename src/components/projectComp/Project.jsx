import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Project = (props) => {
  const { image, title, description, linkText, link } = props;

  return (
    <React.Fragment>
      <div className="">
        <div className="w-full flex flex-col items-center gap-2 mb-5 md:w-3/4 md:m-auto">
         
          <span className="text-center w-fit text-xl font-bold">{title}</span>
          <img
            src={image}
            alt="logo"
            className="rounded-lg w-5/12 transition-transform duration-2000 ease-in-out hover:scale-110 md:w-4/12"
          />
          <div className="text-gray-100 w-10/12 p-2 md-w-full">
            {description}
          </div>
          <Link to={link}>
            <div className="">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faLink} className="text-sm" />
                <span className="text-sm text-gray-100 font-semibold">
                  {linkText}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Project;

Project.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  linkText: PropTypes.string,
  link: PropTypes.string,
};
