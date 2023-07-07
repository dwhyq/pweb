import { Helmet } from "react-helmet";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import CVFile from "/src/assets/myCv/New Cv (in-works).pdf";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import AllProjects from "../../components/projectComp/AllProjects";
import "animate.css";
import INFO from "../../data/info";
import SEO from "../../data/seo";

const Homepage = () => {
  const currentSEO = SEO.find((item) => item.page === "home");

  return (
    <div>
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="flex flex-col min-h-screen overflow-hidden">
        <NavBar active="home" />

        <div className="flex flex-col flex-grow pt-24 md:pt-40">
          <div className="flex flex-col md:flex-row md:justify-between items-center mx-4 md:mx-auto lg:w-[1040px] mb-5">
            <div className="overflow-hidden rounded-xl transform rotate-3 w-[240px] md:w-[300px] lg:w-[250px] animate__animated animate__lightSpeedInLeft">
              <img
                src="/public/portraitWhite.jpeg"
                alt="about"
                className="rounded-xl object-contain"
              />
            </div>
            <div className="p-2 md:w-fit">
              <h1 className="w-fit font-bold text-4xl p-2 text-left animate__animated animate__zoomIn">
                {INFO.homepage.title}
              </h1>
              <div className="text-gray-100 p-2 w-full md:w-[470px] lg:w-[640px] animate__animated animate__zoomIn">
                {INFO.homepage.description}
              </div>
              <div className="flex flex-wrap items-center py-3 w-fit gap-5">
            <Link to={INFO.contact.twitter} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-2xl text-gray-100 transition-transform duration-2000 ease-in-out hover:scale-110"
              />
            </Link>
            <Link to={INFO.contact.github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-2xl text-gray-100 transition-transform duration-2000 ease-in-out hover:scale-110"
              />
            </Link>
            <Link to={INFO.contact.linkedin} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-2xl text-gray-100 transition-transform duration-2000 ease-in-out hover:scale-110"
              />
            </Link>
            <Link
              to={`mailto:${INFO.main.email}`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faMailBulk}
                className="text-2xl text-gray-100transition-transform duration-2000 ease-in-out hover:scale-110"
              />
            </Link>
            <Link to={CVFile} download="/src/assets/myCv/New Cv (in-works).pdf">
              <Button 
                size="xs"
                variant="full"
                className="bg-orange-500 font-bold cursor-pointer"
              >Download CV</Button>
            </Link>
          </div>
            </div>
          </div>
          <div className="flex-shrink-0 mt-5 animate__animated animate__zoomInUp">
            <AllProjects />
          </div>
          
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
