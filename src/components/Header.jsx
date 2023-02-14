import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './UI/Button';

const Header = () => {
    const navigate = useNavigate()
    const logoutHanler = () =>{
        navigate('/')
    }
    return (
        <>
        <HeaderContainer>
           <h1>REDUX TODO</h1>
           <Button onClick={logoutHanler}>LOGOUT</Button>
        </HeaderContainer>
        <Outlet/>
        </>
    );
};

export default Header;


const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: violet;
    margin-bottom: 2rem;
`