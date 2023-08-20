import * as Yup from "yup"

export const validate = Yup.object().shape({
  name: Yup.string()
    .min(3, "User Name must be 3 or more charaters!")
    .max(20, "User Name must be 20 or less!")
    .required("User Name must be required!"),
  email: Yup.string()
    .required("Email must be required!")
});
