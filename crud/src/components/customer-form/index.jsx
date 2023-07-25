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
    // setCustomers()
  }
  return (
    <div id="customer-form">
      <div className="container">
        <h1>{id ? "Edit Customer✍️" : "Add Customer📌"}</h1>
        <div className="customer-form">
          <Formik
            initialValues={
                id ? {
                    companyName: customerValue.companyName,
                    contactTitle: customerValue.contactTitle,
                    address:{
                        city: customerValue.address.city,
                        street: customerValue.address.street,
                    }
                  }
                  : {
                    companyName: "",
                    contactTitle: "",
                    address:{
                        city: "",
                        street: "",
                    }
                  }
            }
            validationSchema={validate}
            onSubmit={(values) => {
              id ? handleEditCustomer(values) :  handleAddCustomer(values)
            }}
          >
            {({ errors, touched }) => (
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
                <button type="submit">{id? "Edit Customer" : "Add Customer"}</button>
                {id && <button type="button" onClick={()=>setIsModalOpen(false)}>Cancel</button>}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;
