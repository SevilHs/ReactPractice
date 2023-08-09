import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkedTode, deleteTodo } from "../redux/todosSlice";
import { v4 as uuid } from "uuid";
import AddEdit from "./AddEdit";
import Completed from "./Completed";

const Todos = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoId, setTodoId] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleUpdateTodo = (todo) => {
    setTodoId(todo.id);
    setInputValue(todo.title);
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleChecked = (todo) => {
    dispatch(checkedTode(todo));
  };
  return (
    <>
      <AddEdit
        inputValue={inputValue}
        setInputValue={setInputValue}
        dispatch={dispatch}
        todoId={todoId}
        setTodoId={setTodoId}
      />
      <div>
        {todos.map((todo) => {
          return (
            !todo.checked && (
              <div
                key={uuid()}
                className="d-flex align-items-center my-4 justify-content-between"
              >
                <input
                  type="checkbox"
                  checked={todo.checked}
                  onChange={() => handleChecked(todo)}
                />
                <p className="w-75 my-0 ms-3">{todo.title}</p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-warning me-3"
                    onClick={() => handleUpdateTodo(todo)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          );
        })}
      </div>
      <Completed handleChecked={handleChecked} />
    </>
  );
};

export default Todos;
