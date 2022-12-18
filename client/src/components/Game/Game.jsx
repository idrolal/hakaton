import React, { useEffect, useRef } from 'react';
import initGame from './animationsPalyer'

function Game(props) {
  const canvas = useRef();

  useEffect(() => {
    initGame();
  }, [])

  return (
    <div id="game_contaner">
      <div className="fixed text-white text-sm ml-2 mt-1 select-none">
        <span>Score: </span><span id="scoreEl">0</span>
      </div>

      <div className="fixed inset-0 flex items-center justify-center" id="modalEl">
        <div id="whiteModalEl" className="bg-white max-w-md w-full p-6 text-center">
          <h1 className="text-4xl font-bold leading-none" id="bigScoreEl">0</h1>
          <p className="text-sm text-gray-700 mb-4">Points</p>
          <div>
            <button
              className="bg-blue-500 text-white w-full py-3 rounded-full text-sm"
              id="startGameBtn"
            >
              Start Game
            </button>
          </div>
        </div>
      </div>

      <canvas ref={canvas}></canvas>

    </div>
  );
}

export default Game;