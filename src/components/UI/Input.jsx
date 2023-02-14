import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
    return (
        <StyledInput {...props} />
    );
};

export default Input;


const StyledInput = styled.input`
    padding: 0.5rem 1rem;
    border-radius: 12px;
    font-size: 16px;
    outline: none;
    box-shadow: 0 0 5px #2222af , 0 0 5px #2222af , 0 0 5px #2222af , 0 0 5px #2222af;
`