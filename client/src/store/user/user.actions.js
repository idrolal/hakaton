import { SUCCESS_GET_ALL_USER, SUCCESS_ADD_USER, REQUEST_ERROR } from "./user.type"

export const successGetAllUsers = (payload) => {
  return {
    type: SUCCESS_GET_ALL_USER,
    payload
  }
}

export const successAddUser = (payload) => {
  return {
    type: SUCCESS_ADD_USER,
    payload
  }
};

export const errorUser = (payload) => {
  return {
    type: REQUEST_ERROR,
    payload
  }
}