import { useState } from "react";
// import { Link } from "react-router-dom";
import Button from "../../components/button/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert();
  };

  return (
    <div className="flex flex-col gap-5 md:flex-row md:w-3/4 lg:w-5/6 lg:gap-20 md:justify-between items-center mx-4 md:mx-auto">
      <div className="md:w-3/5 lg:w md:p-10 w-4/5 shadow-lg text-center p-5 rounded-tl-2xl rounded-br-2xl bg-gray-700">
        <p>
        Kindly reach out to me if you&apos;re interested in collaborating on a project, hiring me for a contract, part time or full frontend developer role. I am open to onsite,hybrid or remote work settings both locally and international. So feel free to message me. I&apos;m always open to new ideas and opportunities.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="w-3/4 lg:w-3/4 mx-auto">
        <div className="mb-3">
          <label htmlFor="fullName" className="block mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="sm:w-full w-full md:w-full px-3 py-2 border bg-transparent border-gray-300 rounded focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            className="sm:w-full w-full md:w-full px-3 py-2 border border-gray-300 rounded focus:outline-none bg-transparent focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here"
            required
            className="sm:w-full w-full md:w-full px-3 py-2 border bg-transparent border-gray-300 rounded focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          ></textarea>
        </div>
        <div className="w-fit m-auto">
          {/* <Link to={''} className=""> */}
          <Button
            type="submit"
            size="md"
            variant="full"
            className="text-white text-lg text-center bg-orange-500 rounded hover:bg-transparent hover:border border-orange-500 focus:outline-none active:bg-orange-600 font-bold"
          >
            Send
          </Button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
