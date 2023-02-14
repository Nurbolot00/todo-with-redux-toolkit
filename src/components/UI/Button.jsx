import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick, color, ...props }) => {
  return (
    <StyledButton {...props} color={color}
      style={{
        background: `${color}`,
        boxShadow: `0 0 5px ${color}, 0 0 5px ${color} , 0 0 5px ${color} , 0 0 5px ${color}`,
      }}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
    padding:  0.5rem 1rem;
    margin: 0.5rem;
    background: #2222af;
    color: white;
    border: none;
    box-shadow: 0 0 5px #2222af , 0 0 5px #2222af , 0 0 5px #2222af , 0 0 5px #2222af;
    font-size: 16px;

    &:disabled{
        opacity: 60%;
    }

`
