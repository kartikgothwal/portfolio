import * as Yup from "yup";
 const contactFormValidaton = Yup.object({
  name: Yup.string()
    .min(5, "should be min 5 characters")
    .max(35, "should be max 35 characters")
    .required("name is required"),
  email: Yup.string().email().required("Please enter your email"),
  message: Yup.string()
    .min(10, "should be min 10 characters")
    .max(150, "should be max 150 characters")
    .required("message is required"),
});
export default contactFormValidaton