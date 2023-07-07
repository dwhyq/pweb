import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", formData);
      alert("Message sent successfully!");
      setFormData({ fullName: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md m-auto">
      <div className="mb-4">
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
          className="w-full px-3 py-2 border bg-transparent border-gray-300 rounded focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
      </div>
      <div className="mb-4">
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
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none bg-transparent focus:ring-orange-500 focus:border-orange-500"
        />
      </div>
      <div className="mb-4">
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
          className="w-full px-3 py-2 border bg-transparent border-gray-300 rounded focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        ></textarea>
      </div>
      <Link to={''} className="">
      <Button
        type="submit"
        size="xs"
        variant="full"
        className="w-full px-4 py-2 text-white border bg-gray-500 rounded hover:bg-transparent focus:outline-none active:bg-orange-600"
      >
        Submit
      </Button>
      </Link>
      
    </form>
  );
};

export default ContactForm;
