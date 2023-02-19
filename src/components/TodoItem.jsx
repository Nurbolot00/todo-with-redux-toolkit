import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { todoActions } from "../store/todo-reducer/TodoSlice";
import Button from "./UI/Button";
import Input from "./UI/Input";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();

  const [mode, setMode] = useState(true);
  const [text, setText] = useState(item.text);

  const deleteTodoHandler = (id) => {
    dispatch(todoActions.deleteTodos(id));
    console.log(id);
  };

  const completeTodoHandler = (id) => {
    dispatch(todoActions.completeTodos(id));
  };

  const editTodoHandler = (id, text) => {
    const objtoEdit = {
      id: id,
      text: text,
      complete: false,
    };
    dispatch(todoActions.editTodos(objtoEdit));
    console.log("edit was clicked");
    switchModeHandler();
  };

  const switchModeHandler = () => {
    setMode((prevState) => !prevState);
    console.log("mode was switched");
  };

  const changeInputHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <StyledListItem>
      {mode ? (
        <>
          {item.complete ? (
            <>
              <p style={{ textDecoration: "line-through" }}>{text}</p>
              <Button
                onClick={() => completeTodoHandler(item.id)}
                color="#24c73c"
              >
                Uncomplete
              </Button>
            </>
          ) : (
            <>
              <p>{text}</p>
              <Button
                onClick={() => completeTodoHandler(item.id)}
                color="#2222af"
              >
                Complete
              </Button>
            </>
          )}
          <Button color="#d96d25" onClick={switchModeHandler}>
            Edit
          </Button>
          <Button color="#c71e32" onClick={() => deleteTodoHandler(item.id)}>
            Delete
          </Button>
        </>
      ) : (
        <>
          <Input type="text" value={text} onChange={changeInputHandler} />
          <Button onClick={() => editTodoHandler(item.id, text)}>Save</Button>
          <Button onClick={switchModeHandler}>Cancel</Button>
        </>
      )}
    </StyledListItem>
  );
};

export default TodoItem;

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 12px;
  width: 100%;

  p {
    font-size: 20px;
    font-weight: 700;
    margin-right: 1rem;
  }
`;
