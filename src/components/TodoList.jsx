import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { actionTypes } from '../store/todo-reducer/TodoReducer';
import TodoItem from './TodoItem';
import Button from './UI/Button';

const TodoList = () => {
   const todos = useSelector((state) => state.todo)
    return (
            <StyledList>
            {todos.map((item,index) =>{
                return (
                    <TodoItem key={item.id} item={item} />
                )
            })}
            </StyledList>
    );
};

export default TodoList;

const StyledList = styled.ul`
    width: 55%;
    margin: 0 auto;
    margin-top: 2rem;

`