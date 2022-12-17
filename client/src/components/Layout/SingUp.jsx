import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { SINGUP } from '../../store/api/user.api';
import { REQUEST_ADD_USER } from '../../store/user/user.type';

function SingUp(props) {
  const refForm = useRef();
  const dispatch = useDispatch();

  const createNewUser = (e) => {
    e.preventDefault();
    const info = Object.fromEntries(new FormData(refForm.current))
    dispatch({ type: REQUEST_ADD_USER, payload: info, url: SINGUP })
  }
  return (
    <form ref={refForm} onSubmit={createNewUser}>
      <input name='email'
        type="email"
        placeholder='Введите email'
      />
      <input name='userName'
        type="userName"
        autoComplete="new-password"
        placeholder='Введите юзернаме'
      />
      <input name="password"
        type="password"
        autoComplete="new-password"
        placeholder='Введите пароль'
      />
      <input name="repeate_password"
        type="password"
        placeholder='Повторите пароль'
      />
      <button>Зарегистрироваться</button>
    </form>
  );
}

export default SingUp;