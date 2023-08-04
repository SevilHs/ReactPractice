import React, { useState } from "react";
import { Form, Formik } from "formik";
import InputField from "./InputField";
import { validate } from "../../validation";
import { addCustomer, editCustomer } from "../../services/customers.service";
import {v4 as uuid} from "uuid"


const CustomerForm = ({customerValue,id,customers,setCustomers,setIsModalOpen}) => {
  const handleAddCustomer=(values)=>{
    const obj={
        id: uuid(),
        ...values
    }
    addCustomer(obj)
  }
  const handleEditCustomer=(obj)=>{
    editCustomer(obj,id)
    setIsModalOpen(false)
    const index=customers.findIndex(item=>item.id==id)
    const updatedData=[...customers]
    updatedData.splice(index,1,{...obj,id})
    setCustomers(updatedData)
  }
  return (
    <div id="customer-form">
      <div className="mx-auto my-14 max-w-7xl">
        <div className="text-center text-3xl my-7">{id ? "Edit Customer✍️" : "Add Customer📌"}</div>
        <div className="w-1/2 mx-auto">
          <Formik
            initialValues={id ? {
              companyName: customerValue.companyName,
              contactTitle: customerValue.contactTitle,
              address:{
                  city: customerValue.address.city,
                  street: customerValue.address.street,
              }
            }
            : 
            {
              companyName: "",
              contactTitle: "",
              address:{
                city: "",
                street: "",
              }
            }}
            validationSchema={validate}
            onSubmit={(values,actions) => {
              id ? handleEditCustomer(values) :  handleAddCustomer(values)
              actions.resetForm()
            }}
            >
            {({ resetForm  }) => (
              <Form>
                <InputField
                  type="text"
                  name="companyName"
                  label="Company Name"
                />
                <InputField
                  type="text"
                  name="contactTitle"
                  label="Contact Title"
                />
                <InputField
                  type="text"
                  name="address.city"
                  label="City"
                />
                <InputField
                  type="text"
                  name="address.street"
                  label="Street"
                />
                <div className="flex justify-around">
                <button className="rounded bg-yellow-400 w-36 p-3 text-gray-50 text-lg" type="submit">{id? "Edit Customer" : "Add Customer"}</button>
                {id && <button className="rounded p-3 bg-red-600 w-20 text-gray-50 text-lg " type="button" onClick={()=>{
                  resetForm()
                  setIsModalOpen(false)
                }}>Cancel</button>}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;
