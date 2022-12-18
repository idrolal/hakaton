import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SINGUP } from '../../store/api/user.api';
import { REQUEST_ADD_USER, REQUEST_ERROR } from '../../store/user/user.type';
import styled from 'styled-components';
import { keyframes } from "styled-components";
import registration from '../../images/registration.gif'
import { useNavigate } from 'react-router-dom';

function SingUp(props) {
  const { user, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !error) {
      navigate('/game')
    }
  }, [user, error]);

  const parentStyle = {
    display: "flex",
  };



  const childStyle = {
    flex: "1",
    margin: "80px",
    height: "200px",

  };

  const [errors, setErrors] = useState({
    userName: false,
    email: false,
    password: false,
    repPass: false
  })

  const checkOnvalid = (info) => {
    let valid = true;
    if (!info.userName.trim().length) {
      setErrors((prev) => ({ ...prev, userName: true }))
      valid = false;
    }
    if (!info.email.trim().length) {
      setErrors((prev) => ({ ...prev, email: true }))
      valid = false;
    }

    if (!info.password.trim().length) {
      setErrors((prev) => ({ ...prev, pass: true }))
      valid = false;
    }

    if (info.password !== info.repPass) {
      setErrors((prev) => ({ ...prev, pass: true }))
      valid = false;
    }
    return valid;
  };


  const refForm = useRef();
  const dispatch = useDispatch();

  const createNewUser = (e) => {
    e.preventDefault();
    dispatch({ type: REQUEST_ERROR, payload: null });
    const info = Object.fromEntries(new FormData(refForm.current))
    if (!checkOnvalid(info)) return;
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
            <img src={registration} alt="registration" width="600" height="600" />
          </div>
          <div style={childStyle} >
            <div className="container">
              <form ref={refForm} onSubmit={createNewUser}>
                <div className="mb-3">
                  <input type="text"
                    name='userName'
                    onChange={() => setErrors((prev) => ({ ...prev, userName: false }))}
                    placeholder="Имя Пользователя" className="form-control" />
                  {errors.userName && <p className="text-danger">Введите логин</p>}

                </div>
                <div className="mb-3">
                  <input type="email"
                    name='email'
                    onChange={() => setErrors((prev) => ({ ...prev, email: false }))}
                    placeholder="E-mail" className="form-control" />
                  {errors.email && <p className="text-danger">Введите email</p>}

                </div>
                <div className="mb-3">
                  <input type="password"
                    name="password"
                    onChange={() => setErrors((prev) => ({ ...prev, password: false }))}
                    placeholder="Пароль" className="form-control" />
                  {errors.password && <p className="text-danger">Введите пароль</p>}

                </div>
                <div className="mb-3">
                  <input type="password"
                    name="repPass"
                    onChange={() => setErrors((prev) => ({ ...prev, repPass: false }))}
                    placeholder="Повторите Пароль" className="form-control" />
                  {errors.repPass && <p className="text-danger">Пароли не совпадают</p>}

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