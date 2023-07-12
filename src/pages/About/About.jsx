import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import INFO from "../../data/info";
import SEO from "../../data/seo";
import ContactForm from "../ContactMe/ContactForm";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "about");

  return (
    <div>
      <Helmet>
        <title>{`About | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <NavBar active="About" />
        <div className="flex-grow">
          <div className="container mt-12 mx-auto md:mt-20 p-5">
            <div className="flex flex-col md:flex-row md:justify-evenly items-center">
              <div className="overflow-hidden rounded-xl transform rotate-3 w-[240px] md:w-[300px] lg:w-[300px] animate__animated animate__lightSpeedInLeft">
                <img src="/ikennaInBlue.jpg" alt="about" className="rounded-xl object-contain" />
              </div>
              <div className="flex flex-col  md:ml-8 mt-6 md:mt-0 text-center">
                <div className="font-bold text-lg md:text-2xl p-2 mt-2   w-fit text-left animate__animated animate__zoomIn">
                  {INFO.about.title}
                </div>
                <div className="md:overflow-hidden md:h text-gray-100 p-2 w-full md:w-[470px] lg:w-[660px] animate__animated animate__zoomIn">{INFO.about.description}</div>
              </div>
            </div>
          </div>
          <div className="md:my-10 my-5">
              <ContactForm />
            </div>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
