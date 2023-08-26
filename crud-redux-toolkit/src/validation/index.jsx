import * as Yup from "yup";

export const validate = Yup.object().shape({
  companyName: Yup.string()
    .min(3, "User Name must be 3 or more charaters!")
    .max(30, "User Name must be 30 or less!")
    .required("User Name must be required!"),
  contactName: Yup.string().required("Email must be required!"),
});
