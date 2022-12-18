import React  from 'react'
import styled from 'styled-components';
import { keyframes } from "styled-components";
import monster2 from "../../images/monster2.gif"


function InfoPage() {
  const parentStyle = {
    display: "flex",
  };
  

  const childStyle = {
    flex: "1",
    margin: "90px"
  };

  return (
    <div className="App">
    <header className="App-header">
      <p>
      <p style={{"color":"#D29770","fontSize":"40px"}}><AnimatedGradientText>Информация об игре</AnimatedGradientText></p>
      </p>
    <div style={parentStyle}>
      <div style={childStyle} >
      <img src={monster2} alt="monster2" width="600" height="600"/>
      </div>
      <div style={childStyle} >
      <p style={{"color":"white","fontSize":"35px","margin":"20px"}}>
      <br/>Окунись в атмосферу инопланетных монстров.
      <br/>Победи всех врагов, спаси свою планету от чужеземцев.
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

export default InfoPage;