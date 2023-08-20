import { Form, Formik } from "formik";
import React from "react";
import InputField from "./InputField";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../../redux/usersSlice";
import { useNavigate, useParams } from "react-router-dom";
import { validate } from "../../validation";

const UserForm = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const user = users.find((item) => item.id == id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
                name: user?.name,
                email: user?.email,
              }
            : {
                name: "",
                email: "",
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
            name="name"
            label="User Name"
            placeholder="Name & Surname..."
          />
          <InputField
            type="email"
            name="email"
            label="User Email"
            placeholder="Email..."
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
