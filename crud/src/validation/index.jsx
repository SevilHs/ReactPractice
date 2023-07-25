import * as Yup from "yup";

export const validate = Yup.object().shape({
  companyName: Yup.string()
    .min(2, "Company Name must be 2 or more charaters!")
    .max(20, "Company Name must be 20 or less!")
    .required("Company Name must be required!"),
  contactTitle: Yup.string()
    .min(2, "Contact Title must be 2 or more charaters!")
    .max(20, "Contact Title must be 20 or less!")
    .required("Contact Title must be required!"),
//   address: {
//     city: Yup.string().required("City is required!"),
//     street: Yup.string().required("Street is required!"),
//   },
});
