import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import ProfilePage from './components/Profile/Profile';
import InfoPage from './components/InfoPage/InfoPage';
import MainPage from './components/MainPage/MainPage';
import ChoiceCharacter from './components/СhoiceCharacter/ChoiceCharacter';
import { REQUEST_GET_ALL_USER } from './store/user/user.type';

import React from 'react'
import SingUp from './components/Layout/SingUp';
import Login from './components/Layout/Login';
import Game from './components/Game/Game';


function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({type: REQUEST_GET_ALL_USER})
  }, [])
  return (
  <Routes>
    <Route path='/' element={<MainPage />} />
    <Route path="/user/profile" element={<ProfilePage />} />
    <Route path='/info' element={<InfoPage />} />
    <Route path='/user/game' element={<ChoiceCharacter />} />
    <Route path='/signup' element={<SingUp />} />
    <Route path='/login' element={<Login />} />
    <Route path='/game' element={<Game/>}/>


</Routes>
  );
}

export default App;
