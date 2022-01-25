/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { connect } from "react-redux";
import { todoTypes } from "../../common/constants";
import { addNote } from "../../redux/action";
import { ADD_NOTE } from "../../redux/actionTypes";
import ToDo from "../ToDo/ToDo";

function Input({ todos, addNote }) {
  const [todo, setTodo] = useState({ text: "" });

  const handleInput = (e) => {
    setTodo({ ...todo, text: e.target.value });
  };

  const handleClick = (e, type) => {
    addNote({ ...todo, type: type });
    setTodo({ text: "" });
  };

  return (
    <>
      <div className="row justify-content-center mb-2">
        <div className="col-11 col-lg-8">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="What to do?"
              aria-label="todo"
              name="todo"
              value={todo.text}
              onChange={handleInput}
            />
          </div>
        </div>
      </div>
      <div className="row justify-content-center flex-wrap mb-2">
        {todoTypes.map((type) => (
          <div align="center" className="col-2 col-lg-1 mb-2" key={type}>
            <button
              className={`btn btn-${type}`}
              onClick={(e) => handleClick(e, type)}
            >
              <i className="bi bi-journal-plus"></i>
            </button>
          </div>
        ))}
      </div>
      <div className="row justify-content-center">
        <div className="col-11 col-lg-8">
          <ToDo todos={todos}></ToDo>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (todo) => {
      dispatch(addNote(todo));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
