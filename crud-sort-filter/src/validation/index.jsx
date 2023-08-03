import * as Yup from "yup";

export const validate = Yup.object().shape({
  Title: Yup.string()
    .min(5, "TItle must be 5 or more charaters!")
    .required("TItle must be required!"),
  Released: Yup.string().required("Released must be required!"),
  Plot: Yup.string()
    .min(15, "Plot must be 25 or more charaters!")
    .max(200, "PLot must be 50 or less!")
    .required("Plot must be required!"),
  Language: Yup.string()
    .required("Language must be required!"),
  imdbRating: Yup.string().required("ImdbRating must be required!")
});
