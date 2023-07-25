import React, { useContext, useState } from "react";
import { Modal, Space, Table } from "antd";
import { deleteCustomer } from "../../services/customers.service";
import CustomerForm from "../customer-form";
import axios from "axios";
import { FavouritesContext } from "../../context/FavouritesContext";
const { Column } = Table;

const CustomersTable = ({ customers, setCustomers }) => {
  const {favourites,setFavourites}= useContext(FavouritesContext)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customerValue, setCustomerValue] = useState({});
  const [checkSort,setCheckSort]=useState('')
  const [id, setId] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleDelete = (id) => {
    setCustomers(customers.filter((item) => item.id != id));
    deleteCustomer(id);
  };
  const handleEdit = (obj, id) => {
    showModal();
    setCustomerValue(obj);
    setId(id);
  };

  const handleSearch = async (inpValue) => {
    let updatedCustomers = [];
    await axios("https://northwind.vercel.app/api/customers").then(
      (res) =>
        (updatedCustomers = res.data.filter((item) =>
          item.companyName
            .toLocaleLowerCase()
            .includes(inpValue.toLocaleLowerCase())
        ))
    );
    setCustomers(updatedCustomers);
  };
  const handleAddFavourites=(obj)=>{
    setFavourites([...favourites,obj])
  }
  const handleSort=()=>{
    setCheckSort("asc")
    let sortedCustomers
    if (checkSort=="asc") {
      sortedCustomers=[...customers.sort((a,b)=>b.id.localeCompare(a.id))]
      setCheckSort("dsc")
    }else{
      sortedCustomers=[...customers.sort((a,b)=>a.id.localeCompare(b.id))]
      setCheckSort("asc")
    }
    setCustomers(sortedCustomers)
  }
  return (
    <div className="container" >
      <Modal title="Basic Modal" open={isModalOpen} closeIcon={false} footer={false} >
        {/* <CloseOutlined /> */}
        <CustomerForm
          customerValue={customerValue}
          id={id}
          customers={customers}
          setCustomers={setCustomers}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
      <input type="search" onChange={(e) => handleSearch(e.target.value)} placeholder="Search Company Name..."/>
      <button onClick={()=> handleSort()}>
       {checkSort ? (checkSort=="asc" ? "Sort by Id⬆️" : "Sort by Id⬇️") : "Sort by Id"}
      </button>
      <Table dataSource={customers} rowKey={(record)=>record.id}>
        <Column
          title="Id"
          dataIndex="id"
          key="id"
          render={(text) => <a href={`customers-list/${text}`}>{text.slice(0, 5)}</a>}
        />
        <Column
          title="Company Name"
          dataIndex="companyName"
          key="companyName"
        />
        <Column
          title="Contact Title"
          dataIndex="contactTitle"
          key="contactTitle"
        />
        <Column
          title="Address"
          dataIndex="address"
          key="address"
          render={(element) => (
            <p>
              {element.city}, {element.street}
            </p>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <button onClick={()=>handleAddFavourites(record)}>{favourites.find(item=>item.id==record.id) ? "Added" : "Add Favourites"}</button>
              <button onClick={() => handleEdit(record, record.id)}>
                Edit {record.id.slice(0, 5)}
              </button>
              <button onClick={() => handleDelete(record.id)}>Delete</button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};
export default CustomersTable;