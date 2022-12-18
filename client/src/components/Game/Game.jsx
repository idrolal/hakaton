import React, { useRef } from 'react';
import { Stage, Layer, Sprite, Animation } from 'react-konva';
import Konva from "konva";
import './game.css';
import monster from '../../assets/monster/1/Centipede_walk.png';
import enemy from '../../assets/monster/2/Battle_turtle_walk.png';

import { useState } from 'react';
import { animationPlayer } from './animationsPalyer'
function Game(props) {
  const canvasHeight = 500;
  const canvasWidth = 600
  const refPlayer = useRef();
  const layerRef = useRef();
  
  const [direction, setDirection] = useState('')

  refPlayer.speed = 2;
  refPlayer.sizeX = 50;
  refPlayer.sizeY = 50;

  const playerImg = new Image();
  playerImg.src = monster;

  playerImg.onload = () => {
    refPlayer.current.start()
    gameLoop.start()
  }

  const monsterImg = new Image();
  playerImg.src = enemy;

  function makeEnemy(type, x, y) {

    // if (type == 'wizard') {
    //   wizard = new Konva.Sprite({ // так же, как и для игрока
    //     x: x,
    //     y: y,
    //     image: wizardImg,
    //     animation: 'idleRight',
    //     animations: animationsWizard,
    //     frameRate: 7,
    //     frameIndex: 0
    //   });
    //   wizard.direction = 'right';
    //   wizard.action = '';

    //   wizards.push(wizard); // добавляем врага в список
    // }

    // layer.add(wizard);
    // stage.add(layer);
    // wizard.start();
  }

  function handleInput(e) {
    refPlayer.current.attrs.animation = 'idleRight'; // движение по умолчанию
    if (direction == 'left' || direction == 'down') {
      refPlayer.current.attrs.animation = 'idleLeft';
    }

    if (window.input.isDown('DOWN') || window.input.isDown('s')) {
      if (refPlayer.current.attrs.y + refPlayer.speed < canvasHeight - refPlayer.sizeY) {
        refPlayer.current.attrs.animation = 'walkRight';
        refPlayer.current.setY(refPlayer.current.attrs.y + 1);
        setDirection('down');
      }
    }

    if (window.input.isDown('UP') || window.input.isDown('w')) {
      if (refPlayer.current.attrs.y - refPlayer.speed > 0) {
        refPlayer.current.attrs.animation = 'walkLeft';
        refPlayer.current.setY(refPlayer.current.attrs.y - 1);
        setDirection('up');
      }

    }

    if (window.input.isDown('LEFT') || window.input.isDown('a')) {
      if (refPlayer.current.attrs.x - refPlayer.speed > 0) {
        refPlayer.current.attrs.animation = 'walkLeft';
        refPlayer.current.setX(refPlayer.current.attrs.x - 1);
        setDirection('left');
      }
    }

    if (window.input.isDown('RIGHT') || window.input.isDown('d')) {
      if (refPlayer.current.attrs.x + 1 < canvasWidth - refPlayer.sizeX) {
        refPlayer.current.attrs.animation = 'walkRight';
        refPlayer.current.setX(refPlayer.current.attrs.x + 1);
        setDirection('right');
      }
    }
  }

  const gameLoop = new Konva.Animation(function (frame) {
    handleInput()
  }, layerRef.current)
  return (
    <div id="game_contaner">
      <Stage width={canvasWidth} height={canvasHeight}>
        <Layer
        ref={layerRef}

        >
          <Sprite x={200} y={150}
            ref={refPlayer}
            image={playerImg}
            animation='idleRight'
            animations={animationPlayer}
            frameRate={1}
            frameIndex={1}
          ></Sprite>

        </Layer>
      </Stage>
    </div>
  );
}

export default Game;