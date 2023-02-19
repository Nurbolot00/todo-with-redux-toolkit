import { useSelector } from 'react-redux';
import styled from 'styled-components';

import TodoItem from './TodoItem';

const TodoList = () => {
   const todos = useSelector((state) => state.todo)
    return (
            <StyledList>
            {todos.map((item) =>{
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