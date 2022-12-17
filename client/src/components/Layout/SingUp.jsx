import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { SINGUP } from '../../store/api/user.api';
import { REQUEST_ADD_USER } from '../../store/user/user.type';
import styled from 'styled-components';
import { keyframes } from "styled-components";
import registration from'../../images/registration.gif'

function SingUp(props) {

  const parentStyle = {
    display: "flex",
  };

  

  const childStyle = {
    flex: "1",
    margin: "80px",
    height: "200px",
    
  };
  const refForm = useRef();
  const dispatch = useDispatch();

  const createNewUser = (e) => {
    e.preventDefault();
    const info = Object.fromEntries(new FormData(refForm.current))
    dispatch({ type: REQUEST_ADD_USER, payload: info, url: SINGUP })
  }
  return (
    <div className="App">
    <header className="App-header">
      <p>
      <AnimatedGradientText>Регистрация</AnimatedGradientText>
      </p>
    <div style={parentStyle}>
      <div style={childStyle} >
      <img src={registration} alt="registration" width="600" height="600"/>
      </div>
      <div style={childStyle} >
      <div className="container">
    <form ref={refForm} onSubmit={createNewUser}>
        <div className="mb-3">
      <input  type="text" placeholder="Имя Пользователя" className="form-control" />
    </div>
    <div className="mb-3">
    <input  type="email" placeholder="E-mail" className="form-control" />
    </div>
    <div className="mb-3">
    <input  type="password" placeholder="Пароль" className="form-control" />
    </div>
    <div className="mb-3">
    <input  type="password" placeholder="Повторите Пароль" className="form-control" />
    </div>
    <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
  </form>
  </div> 
      </div>
      </div>
    </header>
  </div>
  );
}

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;
const AnimatedGradientText = styled.h1`
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-feature-settings: "kern";
  font-size: 48px;
  font-weight: 700;
  line-height: 48px;
  overflow-wrap: break-word;
  text-align: center;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
`;

export default SingUp;