import { SUCCESS_GET_ALL_USER } from "./user.type"

export const successGetAllUsers = (payload) => {
  return {
    type: SUCCESS_GET_ALL_USER,
    payload
  }
}