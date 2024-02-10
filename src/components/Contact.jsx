import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import sectionWrapper from "./hoc";
import { slideIn } from "../util/motion";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, SetLoading] = useState(false);
  const handleChange = (e) => {
    setForm((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    SetLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: import.meta.env.VITE_NAME,
          from_email: form.email,
          to_email: import.meta.env.VITE_MY_EMAIL,
          message: form.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        SetLoading(false);
        alert("Thank you. I will get back to you as soon as possible");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("🚀 ~ handleSubmit ~ error:", error);
        SetLoading(false);
        alert(
          "Something went wrong, Please try sending email on this email " +
            import.meta.env.VITE_MY_EMAIL
        );
      });
  };
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
            <span className="text-white font-medium mb-4">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's Your name?"
              className="bg-tertiary text-white rounded-lg py-4 px-6 placeholder:text-secondary outline-none border-none font-medium "
            />
          </label>
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's Your email?"
              className="bg-tertiary text-white rounded-lg py-4 px-6 placeholder:text-secondary outline-none border-none font-medium "
            />
          </label>
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              name="message"
              rows={7}
              value={form.message}
              onChange={handleChange}
              placeholder="Write Your message..."
              className="bg-tertiary text-white rounded-lg py-4 px-6 placeholder:text-secondary outline-none border-none font-medium "
            />
          </label>
          <button className="sendBtn shadow-primary bg-tertiary ">
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>

          {/* <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit font-bold shadow-md rounded-xl shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button> */}
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

export default sectionWrapper(Contact, "contact");
