import React, { useEffect, useRef } from 'react';
import initGame from './animationsPalyer'
import styled from 'styled-components';
import { keyframes } from "styled-components";
import monstergreen from "../../images/monstergreen.gif"

function Game(props) {
  const canvas = useRef();

  useEffect(() => {
    initGame();
  }, [])

  return (
    <div id="game_contaner">
      <div className="fixed text-white text-sm ml-2 mt-1 select-none">
        <span><AnimatedGradientText> Очки:</AnimatedGradientText>  </span><span id="scoreEl"><AnimatedGradientText> 0</AnimatedGradientText> </span>
        <img src={monstergreen} alt="greenmonster" width="100" height="100"/>
      </div>
      <div className="fixed inset-0 flex items-center justify-center" id="modalEl">
        <div id="whiteModalEl" className="bg max-w-md w-full p-6 text-center">
          <h1 className="text-4xl font-bold leading-none" id="bigScoreEl"><AnimatedGradientText> 0</AnimatedGradientText> </h1>
          <p className="text-sm text-gray-700 mb-4"><AnimatedGradientText> Очки</AnimatedGradientText> </p>
          <div>
            <button
              className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              id="startGameBtn"
            >
              Начать Игру 
            </button>
          </div>
        </div>
      </div>

      <canvas ref={canvas}></canvas>

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

export default Game;