import { useFormik } from "formik";
import * as yup from "yup";
import Button from "../../components/button/Button";

const ContactForm = () => {
  const validationSchema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    email: yup.string().email("Kindly put a valid email").required("Oops! I need your email to send a reply"),
    message: yup.string().required("Don't be shy, please write a message"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Add your form submission logic here
      // values contains the form data
      console.log(values);

      formik.resetForm(); // Reset the form after submission
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  } = formik;

  return (
    <div className="flex flex-col gap-5 md:flex-row md:w-3/4 lg:w-5/6 lg:gap-20 md:justify-between items-center mx-4 md:mx-auto">
      <div className="md:w-3/5 lg:w md:p-10 w-4/5 shadow-lg text-center p-5 rounded-tl-2xl rounded-br-2xl bg-gray-700">
        <p>
          Kindly reach out to me if you&apos;re interested in collaborating on a
          project, hiring me for a contract, part-time, or full frontend
          developer role. I am open to onsite, hybrid, or remote work settings
          both locally and internationally. So feel free to message me. I&apos;m
          always open to new ideas and opportunities.
        </p>
      </div>
      <form name="contact" method="POST" className="w-3/4 lg:w-3/4 mx-auto">
      <input type="hidden" name="contact" value="the-name-of-the-html-form" />
        <div className="mb-3">
          <label htmlFor="name" className="block mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="name"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your full name"
            className="sm:w-full w-full md:w-full px-3 py-2 border bg-transparent border-gray-300 rounded focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
          {touched.fullName && errors.fullName && (
            <p className="text-red-500">{errors.fullName}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block mb-2">
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
            className="sm:w-full w-full md:w-full px-3 py-2 border border-gray-300 rounded focus:outline-none bg-transparent focus:ring-orange-500 focus:border-orange-500"
          />
          {touched.email && errors.email && (
            <p className="text-red-500">{errors.email}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Type your message here"
            className="sm:w-full w-full md:w-full px-3 py-2 border bg-transparent border-gray-300 rounded focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          ></textarea>
          {touched.message && errors.message && (
            <p className="text-red-500">{errors.message}</p>
          )}
        </div>
        <div className="w-fit m-auto">
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
    </div>
  );
};

export default ContactForm;
