import { SUCCESS_GET_ALL_CHARACTER } from "./character.type"


export const successGetAllCharacter = (payload) => {
  return {
    type: SUCCESS_GET_ALL_CHARACTER,
    payload
  }
}