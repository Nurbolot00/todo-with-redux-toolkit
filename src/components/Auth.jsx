import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth/AuthSlice";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "./UI/Button";
import Input from "./UI/Input";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formState, setState] = useState({
    email: "",
    password: "",
  });
  const [emailValidation, setEmailValidation] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState(true);
  const inputChangeHandler = (name) => {
    return (event) => {
      setState((prevState) => ({ ...prevState, [name]: event.target.value }));
    };
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      formState.email === "test@gmail.com" &&
      formState.password === "123123"
    ) {
      navigate("/header/todoList");
      dispatch(authActions.login(formState.email));
    }
    setState({ email: "", password: "" });
  };

  const validateEmail = () => {
    setEmailValidation(formState.email.includes("@"));
  };
  const validatePassword = () => {
    setPasswordValidation(formState.password.trim().length > 5);
  };
  return (
    <MainContsainer>
      <section>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="email">Email:</label>
            <Input
              placeholder="Enter your email"
              type="email"
              id="email"
              value={formState.email}
              onChange={inputChangeHandler("email")}
              onBlur={validateEmail}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <Input
              placeholder="Enter your password"
              type="password"
              id="password"
              value={formState.password}
              onChange={inputChangeHandler("password")}
              autoComplete="password"
              onBlur={validatePassword}
            />
          </div>
          <Button>Login</Button>
        </form>
      </section>
    </MainContsainer>
  );
};

export default Auth;

const MainContsainer = styled.main`
  margin: 0 auto;
  margin-top: 10rem;
  border: 1px solid;
  padding: 3rem 1.5rem;
  width: 50%;
  border-radius: 15px;
  background-color: #3dc37b;
  box-shadow: 0 0 5px #3dc37b, 0 0 20px #3dc37b, 0 0 20px #3dc37b,
    0 0 20px #3dc37b;
  div {
    margin-bottom: 1rem;
    label {
      margin-right: 1rem;
      font-size: 18px;
      font-weight: 700;
      color: white;
    }
  }
`;
