import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { getCustomersData } from "../../services/customers.service";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"

const Details = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState({})
  const handleGetCustomer = async () => {
   let customers = await getCustomersData();
   setCustomer(customers.find((item) => item.id == id))
  };
  useEffect(() => {
    handleGetCustomer();
  }, [])
  const navigate=useNavigate()
  return (
    <div className="max-w-7xl my-5 mx-auto text-lg">
      <Helmet>
        <title>Details</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <h1 className="text-7xl"> Details {customer.id}</h1><br />
      <p><span className="font-bold">Company Name: </span>{customer.companyName}</p>
      <p><span className="font-bold">Contact Name & Title: </span>{customer.contactName}, {customer.contactTitle}</p>
      <p><span className="font-bold">Address(City,Street): </span> {customer.address?.city}, {customer.address?.street}</p>
      <button className="text-lg bg-gray-400 p-2 my-5 rounded" onClick={()=>navigate('/customers-list')}>Go Back</button>
    </div>
  );
};

export default Details;
