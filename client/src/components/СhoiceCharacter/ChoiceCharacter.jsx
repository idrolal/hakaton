import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REQUEST_GET_ALL_CHARACTER } from "../../store/characters/character.type";
import React from 'react';



function ChoiceCharacter() {
const dispatch = useDispatch();
const { characters } = useSelector((state) => state.characters)
console.log(characters);
  useEffect(()=>{
    dispatch({type: REQUEST_GET_ALL_CHARACTER})
  }, [])

  return (
    <div>
      <h2>Выбор персонажа</h2>
      {characters.map((character) => (
         <div key={character.id}>
            <img src={character['Role.image']} alt='character' />
            <p>{character['Role.name']}</p>
            <p>{character['Role.description']}</p>
            <p>{character['Role.health']}</p>
           <p>{character['Role.power']}</p>
           <p>{character['Role.speed']}</p>
           <button type="button">Выбрать</button>
         </div>
      )
      )}
    </div>
  );
}

export default ChoiceCharacter;