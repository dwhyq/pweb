import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "../../components/button/Button";
import axios from "axios";

const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State variable for modal visibility
  const [submissionMessage, setSubmissionMessage] = useState(""); // State variable for submission message

  const validationSchema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    email: yup
      .string()
      .email("Kindly put a valid email")
      .required("Oops! I need your email to send a reply"),
    message: yup.string().required("Don't be shy, please write a message"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://formspree.io/f/xvojoyva",
          values
        );
        console.log("Form submitted successfully", response);
        setSubmissionMessage("Thank you for messaging!"); // Set the submission message
        setIsModalOpen(true); // Open the modal

        formik.resetForm();
      } catch (error) {
        console.error("Form submission error");
        setSubmissionMessage("Oops! An error occurred."); // Set the error message
        setIsModalOpen(true); // Open the modal
      }
    },
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    formik;

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmissionMessage("");
  };

  return (
    <div className="max-w-screen-lg flex flex-col md:gap-20 items-center md:flex-row mx-auto p-4">
      <p className="text-md mb-3 md:text-xl lg:text-xl md:w-3/4">
        Kindly reach out to me if you&apos;re interested in collaborating on a
        project, hiring me for a contract, part-time, or full-time frontend
        developer role. I am open to onsite, hybrid, or remote work settings
        both locally and internationally. So feel free to message me. I&apos;m
        always open to new ideas and opportunities.
      </p>
      <form
        onSubmit={handleSubmit}
        id="contactMeForm"
        className="w-full md:w-3/4 mx-auto"
      >
        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border bg-transparent border-gray-300 rounded focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
          {touched.fullName && errors.fullName && (
            <p className="text-red-500">{errors.fullName}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your email address"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none bg-transparent focus:ring-orange-500 focus:border-orange-500"
          />
          {touched.email && errors.email && (
            <p className="text-red-500">{errors.email}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="block mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Type your message here"
            className="w-full h-22 px-4 py-2 border bg-transparent border-gray-300 rounded focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          ></textarea>
          {touched.message && errors.message && (
            <p className="text-red-500">{errors.message}</p>
          )}
        </div>
        <div className="text-center">
          <Button
            type="submit"
            size="md"
            variant="full"
            className="text-white text-lg text-center bg-orange-500 rounded hover:bg-transparent hover:border border-orange-500 focus:outline-none active:bg-orange-600 font-bold"
          >
            Send
          </Button>
        </div>
      </form>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded">
            <p className="text-orange-500">{submissionMessage}</p>
            <button
              className="mt-4 bg-orange-500 text-white px-4 py-2 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
