import { Helmet } from "react-helmet";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import AllProjects from "../../components/projectComp/AllProjects";
import "animate.css";
import INFO from "../../data/info";
import SEO from "../../data/seo";
import DownloadBtn from "../../components/button/DownloadBtn";

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

        <div className="flex flex-col flex-grow pt-20 md:pt-32">
          <div className="flex flex-col-reverse md:flex-row md:justify-between mx-4 md:mx-auto lg:w-[1040px] mb-5">
           
            <div className="p-2 md:w-fit m-auto">
              <h1 className="font-bold lg:text-5xl md:text-3xl text-3xl mb-2 md:text-left lg:text-left animate__animated animate__zoomIn">
                {INFO.homepage.title}
              </h1>
              <div className="text-gray-100 md:text-left lg:text-left w-full md:w-[470px] lg:w-[640px] animate__animated animate__zoomIn">
                {INFO.homepage.description}
              </div>
              <div className="flex flex-wrap justify-left md:justify-start lg:justify-start items-center w-full lg:ml-2 md:ml-2 py-3 gap-5">
                <Link
                  to={INFO.contact.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
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
                <Link
                  to={INFO.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
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
    
                <DownloadBtn
                  fileUrl="ikenna-FEdev-cv.docx"
                  fileName="ikenna-FEdev-cv"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-xl transform rotate-3 max-w-[280px] m-auto md:w-[300px] lg:w-[250px] animate__animated animate__lightSpeedInLeft">
              <img
                src="/portraitWhite.jpeg"
                alt="about"
                className="rounded-xl object-contain"
              />
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
