import { ErrorMessage, useField } from "formik";
import React from "react";

const InputField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  // console.log();
  // const handleResetInp=()=>{
  //   field.value=""
  //   setResetInput(false)
  // }
  // resetInput ? handleResetInp() : null
  return (
    <div className="" >
      <label>
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
        {label}
        </span>
      </label>
      <input autoComplete="off" {...props} {...field} className="w-full my-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" />
      <ErrorMessage component="div" name={field.name} />
    </div>
  );
};

export default InputField;
