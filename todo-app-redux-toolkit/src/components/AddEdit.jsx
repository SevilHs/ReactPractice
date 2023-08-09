import React from "react";
import { v4 as uuid } from "uuid";
import { addTodo, updateTodo } from "../redux/todosSlice";

const AddEdit = ({inputValue,setInputValue, dispatch,todoId,setTodoId}) => {
    const handleAddTodo = () => {
       if(inputValue){
        todoId
        ? dispatch(
            updateTodo({
              title: inputValue,
              id: todoId,
            })
          )
        : dispatch(
            addTodo({
              id: uuid(),
              title: inputValue,
            })
          );
      setInputValue("");
      setTodoId("")
       }
      };
        
    const handleKeyDown = (e) => {
        e.key==="Enter" && handleAddTodo()
    }
    
  return (
    <div className="d-flex my-5 justify-content-between">
      <input
        className="form-control w-75"
        type="search"
        value={inputValue}
        onKeyDown={handleKeyDown}
        placeholder="Add..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleAddTodo}>
        {todoId ? "Edit" : "Add"}
      </button>
    </div>
  );
};

export default AddEdit;
