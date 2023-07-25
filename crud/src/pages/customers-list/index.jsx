import React, { useEffect, useState } from "react";
import { getCustomersData } from "../../services/customers.service";
import CustomersTable from "../../components/customers-table";
import { Helmet } from "react-helmet-async";

const CustomersList = () => {
  const [customers, setCustomers] = useState([]);
  const getData = async () => {
    setCustomers(await getCustomersData());
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Customers List</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      ;
      <CustomersTable customers={customers} setCustomers={setCustomers} />
    </div>
  );
};

export default CustomersList;
