import React, { useContext, useState } from "react";
import { Modal, Space, Table } from "antd";
import { deleteCustomer } from "../../services/customers.service";
import CustomerForm from "../customer-form";
import axios from "axios";
import { FavouritesContext } from "../../context/FavouritesContext";
import { Link } from "react-router-dom";
const { Column } = Table;

const CustomersTable = ({ customers, setCustomers }) => {
  const {favourites,setFavourites}= useContext(FavouritesContext)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customerValue, setCustomerValue] = useState({});
  const [checkSort,setCheckSort]=useState('')
  const [id, setId] = useState("");

  const btnStyle="rounded p-2 text-gray-50"
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
    let checkFav=favourites.find(item=>item.id==obj.id)
    !checkFav && setFavourites([...favourites,obj])
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
    <div className="mx-auto max-w-7xl" >
      <Modal open={isModalOpen} closeIcon={false} footer={false} >
        <CustomerForm
          customerValue={customerValue}
          id={id}
          customers={customers}
          setCustomers={setCustomers}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
      <div className="flex justify-between my-7">
        <input className="placeholder:text-slate-400 w-1/2 block border rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-none focus:ring-1 sm:text-sm" type="search" onChange={(e) => handleSearch(e.target.value)} placeholder="Search Company Name..."/>
        <button className="rounded bg-gray-400 w-40 p-3 text-gray-50" onClick={()=> handleSort()}>
           {checkSort ? (checkSort=="asc" ? "Sort by Id⬆️" : "Sort by Id⬇️") : "Sort by Id"}
        </button>
      </div>
      <Table dataSource={customers} rowKey={(record)=>record.id}>
        <Column
          title="Id"
          dataIndex="id"
          key="id"
          render={(text) => <Link to={`/customers-list/${text}`}>{text.slice(0, 5)}</Link>}
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
              <button className={`bg-violet-400 ${btnStyle}`} onClick={()=>handleAddFavourites(record)}>{favourites.find(item=>item.id==record.id) ? "Added" : "Add Favourites"}</button>
              <button className={`bg-yellow-400 ${btnStyle}`} onClick={() => handleEdit(record, record.id)}>
                Edit {record.id.slice(0, 5)}
              </button>
              <button className={`bg-red-600 ${btnStyle}`} onClick={() => handleDelete(record.id)}>Delete</button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};
export default CustomersTable;