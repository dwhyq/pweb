import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import INFO from "../../data/info";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <Link to={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer">
        <div className="flex gap-2">
          <div className="social-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>

          <div className="">{INFO.main.email}</div>
        </div>
      </Link>
      <ContactForm />
    </div>
  );
};

export default Contact;
