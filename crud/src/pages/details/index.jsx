import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { getCustomersData } from "../../services/customers.service";

const Details = () => {
  const { id } = useParams();
const [customer, setCustomer] = useState({})
  const handleGetCustomer = async () => {
   let customers = await getCustomersData();
   setCustomer(customers.find((item) => item.id == id))
  };
  handleGetCustomer();
  return (
    <div className="container">
      <Helmet>
        <title>Details</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
     <h1> Details {customer.id}</h1>
      <p>{customer.companyName},{customer.contactTitle}</p>
      <p>{customer.address?.city},{customer.address?.street}</p>
      <p>{customer.address?.country},{customer.address?.phone}</p>
    </div>
  );
};

export default Details;
