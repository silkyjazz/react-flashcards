import * as yup from "yup";

const passwordRules = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
// Minimum 5 characters, at least one letter and one number

export const signUpSchema = yup.object().shape({
  username: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid E-mail").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message: "Minimum of 5 characters, at least 1 letter 1 number",
    })
    .required("Required"),
});
