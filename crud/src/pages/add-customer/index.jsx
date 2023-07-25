import React from "react";
import CustomerForm from "../../components/customer-form";
import { Helmet } from "react-helmet-async";

const AddCustomer = () => {
  return (
    <div>
      <Helmet>
        <title>Add Customer</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <CustomerForm />
    </div>
  );
};

export default AddCustomer;
