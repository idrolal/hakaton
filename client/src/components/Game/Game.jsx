import React, { useRef } from 'react';
import { Stage, Layer, Sprite, Animation } from 'react-konva';
import './game.css';
import monster from '../../assets/monster/1/Centipede_walk.png';

function Game(props) {
  const refSprite = useRef();
  
  const animationsPlayer = {
    idleRight: [ // игрок стоит и смотрит вправо
      2, 10, 90, 80,
      148, 10, 66, 80,
      158, 10, 56, 80,
      // 217, 10, 71, 80,
      // 287, 10, 76, 80,
      // 172, 10, 48, 49,
    ]
  };


  const playerImg = new Image();
  playerImg.src = monster;

  playerImg.onload = () => {
    refSprite.current.start()
  }

  return (
    <div id="game_contaner">
      <Stage width={600} height={500}>
        <Layer>
          <Sprite x={200} y={150}
            ref={refSprite}
            image={playerImg}
            animation='idleRight'
            animations={animationsPlayer}
            frameRate={1}
            frameIndex={1}
          ></Sprite>

        </Layer>
      </Stage>
    </div>
  );
}

export default Game;