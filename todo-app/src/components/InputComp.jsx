import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import uuid from "react-uuid";
import ListComp from "./ListComp";

const InputComp = () => {
  const [checkEdit, setCheckEdit] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);
  function handleEditTodo() {
    if(inputValue){
      let editedTodo = todo.filter((item) => item.id == checkEdit);
      editedTodo[0].text = inputValue;
      setTodo([...todo]);
      setCheckEdit("");
    } 
  }
  function handleEmptyinput() {
    setInputValue("");
  }
  return (
    <>
      <Row className="mt-5">
        <Col></Col>
        <Col xs={7} className="d-flex justify-content-between">
          <input
          placeholder="Add..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
          <button
            className="btn btn-primary"
            onClick={() => {
              checkEdit
                ? handleEditTodo()
                : inputValue && setTodo([...todo, { text: inputValue, id: uuid() }]);
              handleEmptyinput();
            }}
          >
           {checkEdit ? "EDIT" : "ADD"}
          </button>
        </Col>
        <Col></Col>
      </Row>
      <ListComp
        todo={todo}
        setTodo={setTodo}
        setInputValue={setInputValue}
        inputValue={inputValue}
        setCheckEdit={setCheckEdit}
      />
    </>
  );
};

export default InputComp;
