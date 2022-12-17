import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REQUEST_GET_ALL_CHARACTER } from "../../store/characters/character.type";



function ChoiceCharacter() {
const dispatch = useDispatch();
const { characters } = useSelector((state) => state.characters)

   useEffect(()=> {
      dispatch({type: REQUEST_GET_ALL_CHARACTER})
   })

  return (
    <div>
      <h2>Выбор персонажа</h2>
      {characters.map((character) => (
         <div>
            <img src={character.image} alt='character' />
            
         </div>
      )
      )}
    </div>
  );
}

export default ChoiceCharacter;