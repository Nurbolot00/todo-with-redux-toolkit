import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionTypes } from '../store/todo-reducer/TodoReducer';
import styled from 'styled-components'
import TodoList from './TodoList';
import Button from './UI/Button';
import Input from './UI/Input';

const TodoForm = () => {
    const [inputValue,setInputValue] = useState('')
    const dispatch = useDispatch()

    const enabled = inputValue.trim().length > 0 ;


    const changeInputValueHandler = (e) =>{
        e.preventDefault()
        setInputValue(e.target.value)
    }

    const deleteAllHandler = () =>{
        dispatch({type: actionTypes.DELETE_ALL})

    }
    const addTodoHandler = (text) =>{
        dispatch({type: actionTypes.ADD, payload: text})
        setInputValue('')
    }
    return (
        <>
        <Container>
            <Input placeholder='Введите название' value={inputValue} onChange={changeInputValueHandler} type="text" />
            <Button disabled={!enabled} onClick={() => addTodoHandler(inputValue)}>ADD</Button>
            <Button  color='#c71e32' onClick={() => deleteAllHandler()}>DELETE ALL</Button>
        </Container>
        <TodoList/>
        </>
    );
};

export default TodoForm;

const Container = styled.div`
    margin: 0 auto;
`