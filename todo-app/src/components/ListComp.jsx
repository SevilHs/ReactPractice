import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import uuid from "react-uuid";

const ListComp = ({ todo,setTodo,setInputValue,setCheckEdit }) => {
    function handleDeleteTodo(id) {
      let updatedTodo= todo.filter(item=>item.id!=id)
      setTodo(updatedTodo)
    }
    function handleEditTodo(id){
        let updatedTodos=todo.find(item=>item.id==id)
        setInputValue(updatedTodos.text)
        setCheckEdit(id)
    }
  return (
    <>
      {todo.map((item) => {
        return (
          <Row className="mt-3" key={uuid()}>
            <Col></Col>
            <Col xs={7}>
              <ListGroup>
                <ListGroup.Item>
                  <p>{item.text}</p>
                  <div className="actions">
                    <button className="btn btn-warning mx-2" onClick={()=>handleEditTodo(item.id)}>Edit</button>
                    <button className="btn btn-danger" onClick={()=>handleDeleteTodo(item.id)}>Delete</button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col></Col>
          </Row>
        );
      })}
    </>
  );
};

export default ListComp;
