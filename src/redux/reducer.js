import { ADD_NOTE } from "./actionTypes";
import initialState from "./initialState";

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE: {
      console.log("mani");
      console.log(action.payload);
      return { todos: [...state.todos, action.payload] };
    }
    default:
      return state;
  }
};
