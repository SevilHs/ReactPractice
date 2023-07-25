import { ErrorMessage, useField } from 'formik'
import React from 'react'

const InputField = ({label,...props}) => {
    const [field, meta, helpers] = useField(props)
    // console.log();
    // const handleResetInp=()=>{
    //   field.value=""
    //   setResetInput(false)
    // }
    // resetInput ? handleResetInp() : null               
    return (
      <div>
        <label >{label}</label><br/>
        <input autoComplete='off' {...props} {...field} />
        <ErrorMessage component='div' name={field.name} />
      </div>
    )
}

export default InputField