import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/usersSlice";

const UserList = () => {
  const [searchValue, setSearchValue] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const keys = ["name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) =>
        item[key].toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    );
  };
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <>
      <p className="text-3xl text-center font-bold my-11 text-sky-200">
        User List
      </p>
      <div className="w-2/5 mx-auto my-12 flex justify-between">
        <Link className="bg-violet-300 p-3 rounded-lg" to="add-edit-user">
          Add User
        </Link>
        <input
          type="text"
          placeholder="Search User..."
          className="w-5/6 p-3 outline-violet-700 border-2 rounded-lg border-violet-300"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <table className="w-3/4 mx-auto text-center">
        <thead className="text-xl">
          <tr>
            <th>User</th>
            <th>User Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {search(users).map((user, index) => {
            return (
              <tr key={index}>
                <td className="py-4">{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    to={`add-edit-user/${user.id}`}
                    className="p-2 px-5 bg-yellow-300 border-2 border-yellow-500 text-amber-800	mr-3"
                  >
                    Edit
                  </Link>
                  <button
                    className="p-2 px-5 bg-orange-300 border-2 border-orange-500	text-orange-700"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
