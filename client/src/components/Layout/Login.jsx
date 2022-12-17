import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { LOGIN } from '../../store/api/user.api';
import { REQUEST_ADD_USER } from '../../store/user/user.type';

function Login(props) {
  const refForm = useRef();
  const dispatch = useDispatch();

  const createNewUser = (e) => {
    e.preventDefault();
    const info = Object.fromEntries(new FormData(refForm.current))
    dispatch({ type: REQUEST_ADD_USER, payload: info, url: LOGIN })
  }
  return (
    <form ref={refForm} onSubmit={createNewUser}>
      <input name='email'
        type="text"
        placeholder='Введите email или логин'
      />

      <input name="password"
        type="password"
        autoComplete="new-password"
        placeholder='Введите пароль'
      />

      <button>Зарегистрироваться</button>
    </form>
  );
}

export default Login;