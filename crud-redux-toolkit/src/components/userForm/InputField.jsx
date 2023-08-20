import { ErrorMessage, useField } from "formik";
import React from "react";

const InputField = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <div className="flex flex-col" >
      <label className="text-lg text-gray-500" htmlFor={field.name}>{label}</label>
      <br />
      <input className="outline-blue-700 rounded-3xl p-3 mb-4 bg-zinc-100" id={field.name} {...props} {...field} />
      <ErrorMessage className="text-red-400" component="div"  name={field.name} />
    </div>
  );
};

export default InputField;
