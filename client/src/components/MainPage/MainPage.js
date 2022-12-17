import { useNavigate } from "react-router-dom";
import React from 'react';
import styled from 'styled-components';
import { keyframes } from "styled-components";
import monster from "../../images/monster.gif"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { REQUEST_GET_ALL_USER } from '../../store/user/user.type';


function MainPage() {
   const navigate = useNavigate()

   const parentStyle = {
    display: "flex",
  };

  const childStyle = {
    flex: "1",
    margin: "90px"
  };
 

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({type: REQUEST_GET_ALL_USER})
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <AnimatedGradientText>Welcome to the Game</AnimatedGradientText>
        </p>
      <div style={parentStyle}>
        <div style={childStyle} >
        <img src={monster} alt="monster" width="600" height="600"/>
        </div>
        <div style={childStyle} >
          <br/>
          <div style={{backgroundColor:"w"}}>
          <p style={{"color":"#D29770","fontSize":"40px"}}
          onClick={()=> navigate('/signup')}>
          <AnimatedGradientText> Регистрация</AnimatedGradientText>
          </p>
          </div>
          <br/>
          <p style={{"color":"#D29770","fontSize":"40px" }}
          onClick={()=> navigate('/login')}><AnimatedGradientText> Вход</AnimatedGradientText>
          </p>
          <br/>
          <p style={{"color":"#D29770","fontSize":"40px"}}
          onClick={()=> navigate('/info')}><AnimatedGradientText> Информация об игре</AnimatedGradientText>
          </p>
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


export default MainPage;