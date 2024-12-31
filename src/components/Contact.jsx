import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import sectionWrapper from "./hoc";
import { slideIn } from "../util/motion";
import { useFormik } from "formik";
import { contactFormValidaton } from "../util/schemas";
 import toast from "react-hot-toast";

// eslint-disable-next-line react-refresh/only-export-components
const Contact = () => {
  const formRef = useRef();
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };
 
  const [loading, SetLoading] = useState(false);
  // const handleChange = (e) => {
  //   setForm((prevData) => {
  //     return {
  //       ...prevData,
  //       [e.target.name]: e.target.value,
  //     };
  //   });
  // };
  const { values, errors, handleSubmit, touched, handleBlur, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: contactFormValidaton,
      onSubmit: (values, action) => {
        SetLoading(true);
        emailjs
          .send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            {
              from_name: values.name,
              to_name: import.meta.env.VITE_NAME,
              from_email: values.email,
              to_email: import.meta.env.VITE_MY_EMAIL,
              message: values.message,
            },
            import.meta.env.VITE_PUBLIC_KEY
          )
          .then(() => {
            SetLoading(false);
            toast.success('Thank you. I will get back to you as soon as possible', {
              duration: 4000,
              position: 'top-center', 
              style: {
                border: '1px solid #713200',
                padding: '16px',
                color: '#713200',
              },
              iconTheme: {
                primary: '#713200',
                secondary: '#FFFAEE',
              },
              removeDelay: 0,

            });
            action.resetForm();
          })
          .catch((error) => {
            console.error("🚀 ~ handleSubmit ~ error:", error);
            SetLoading(false);
            toast.error(
              "Something went wrong, Please try sending email on this email " +
                import.meta.env.VITE_MY_EMAIL,
              {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: "Bounce",
              }
            );
          });
      },
    });

  return (
    <div className=" xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100  p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} text-[#915eff`}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8 "
        >
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4 after:content-['*'] after:ml-0.5 after:text-red-500">
              Your name
            </span>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="What's Your name?"
              className="bg-tertiary text-white rounded-lg py-4 px-6 placeholder:text-secondary outline-none border-none font-medium "
            />
            {errors.name && touched.name ? (
              <span className="text-red-500 mt-1 text-[12px]">
                {errors.name}
              </span>
            ) : null}
          </label>
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4 after:content-['*'] after:ml-0.5 after:text-red-500">
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="What's Your email?"
              className="bg-tertiary text-white rounded-lg py-4 px-6 placeholder:text-secondary outline-none border-none font-medium "
            />
            {errors.email && touched.email ? (
              <span className="text-red-500 mt-1 text-[12px]">
                {errors.email}
              </span>
            ) : null}
          </label>
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4 after:content-['*'] after:ml-0.5 after:text-red-500">
              Your Message
            </span>
            <textarea
              name="message"
              rows={7}
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Write Your message..."
              className="bg-tertiary text-white rounded-lg py-4 px-6 placeholder:text-secondary outline-none border-none font-medium "
            />
            {errors.message && touched.message ? (
              <span className="text-red-500 mt-1 text-[12px]">
                {errors.message}
              </span>
            ) : null}
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit font-bold shadow-md rounded-xl shadow-primary"
          >
            {loading ? (
              <div className="flex justify-center align-center gap-3">
                <span className="text-secondary"> Sending...</span>{" "}
                <div className="spinner mt-1">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xhl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default sectionWrapper(Contact, "contact");
