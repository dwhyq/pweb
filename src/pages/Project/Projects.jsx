import { useEffect } from "react";
import { Helmet } from "react-helmet";

import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import AllProjects from "../../components/projectComp/AllProjects";

import INFO from "../../data/info";
import SEO from "../../data/seo";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "projects");

  return (
    <div>
      <Helmet>
        <title>{`Projects | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <NavBar active="projects" />
        <div className="flex-grow p-5">
          <div className="w-fit pt-10 mx-auto">
            <div className="flex border border-white rounded-full bg-white shadow-md top-4vh z-50 lg:hidden md:hidden">
            <img src="/logo.png" width={46} />
            </div>
          </div>
          <div className="mt-10 text-center">
            <div className="font-bold text-2xl">
              Things I’ve made trying to put my dent in the universe.
            </div>
            <div className="text-gray-100 py-5 md:py-10 mx-auto max-w-lg md:max-w-2xl lg:max-w-3xl lg:pb-20">
              I have ve worked on a variety of projects over the years and I am
              proud of the progress i have made. Many of these projects are
              open-source and available for others to explore and contribute to.
              If you are interested in any of the projects i have worked on,
              please feel free to check out the code and suggest any
              improvements or enhancements you might have in mind. Collaborating
              with others is a great way to learn and grow, and I am always open
              to new ideas and feedback.
            </div>
            <div className="flex-grow">
              <AllProjects />
            </div>
          </div>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Projects;
