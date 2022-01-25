import { ADD_NOTE } from "./actionTypes";

export const addNote = (todo) => ({
  type: ADD_NOTE,
  payload: todo,
});
