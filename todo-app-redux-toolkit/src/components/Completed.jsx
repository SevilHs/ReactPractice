import React, { useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

const Completed = ({ handleChecked }) => {
  const [checkHide, setCheckHide] = useState(false);
  const todos = useSelector((state) => state.todos);
  const completedTodos = todos.filter((todo) => todo.checked == true);

  const handleHideItems = () => {
    checkHide ? setCheckHide(false) : setCheckHide(true);
  };
  
  return (
    <div>
      <h2 className="text-center">Completed</h2>
      <div className="d-flex justify-content-end my-4">
        {completedTodos.length != 0 && (
          <button className="btn btn-primary" onClick={handleHideItems}>
            Hide
          </button>
        )}
      </div>
      {!checkHide &&
        completedTodos.map((item) => {
          return (
            <div key={uuid()}>
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => {
                    handleChecked(item);
                  }}
                />
                <p className="ms-3 my-0 text-decoration-line-through">{item.title}</p>
              </div>
              <hr />
            </div>
          );
        })}
    </div>
  );
};

export default Completed;
