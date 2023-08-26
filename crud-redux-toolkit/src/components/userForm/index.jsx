import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import InputField from "./InputField";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
// import { addUser, updateUser } from "../../redux/usersSlice";
import { addUser, getData, updateUser } from "../../redux/usersSlice";
import { useNavigate, useParams } from "react-router-dom";
import { validate } from "../../validation";

const UserForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.data);
  const user = users.find((item) => item.id == id);

  useEffect(() => {
    dispatch(getData());
  }, []);

  const handleAddUser = (values) => {
    let obj = {
      ...values,
      id: uuid(),
    };
    dispatch(addUser(obj));
  };
  const handleUpdateUser = (values) => {
    let updatedUser = {
      ...values,
      id,
    };
    dispatch(updateUser(updatedUser));
  };
  return (
    <div className="w-full">
      <Formik
        initialValues={
          id
            ? {
                companyName: user?.companyName,
                contactName: user?.contactName,
              }
            : {
                companyName: "",
                contactName: "",
              }
        }
        validationSchema={validate}
        onSubmit={(values, actions) => {
          id ? handleUpdateUser(values) : handleAddUser(values);
          actions.resetForm();
          navigate("/");
        }}
      >
        <Form className="my-12 flex flex-col">
          <InputField
            type="text"
            name="companyName"
            label="User Name"
            placeholder="Name & Surname..."
          />
          <InputField
            type="text"
            name="contactName"
            label="User Title"
            placeholder="User Title..."
          />
          <button
            className=" w-1/3 mx-auto mt-7 rounded-lg bg-sky-900	text-white px-7 py-3"
            type="submit"
          >
            {id ? "Edit User" : "Add User"}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;
