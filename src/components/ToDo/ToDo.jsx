import React from "react";
import PropTypes from "prop-types";

function ToDo(props) {
  const todos = props.todos;
  return (
    <div className="d-flex flex-row align-items-start flex-wrap gap-2">
      {todos.map((todo) => (
        <div
          className={`card text-white bg-${todo.type} mb-3 shadow rounded`}
          key={todo.text}
        >
          <div className="card-body">
            <p className="card-text">{todo.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

ToDo.propTypes = {
  todos: PropTypes.array,
};

export default ToDo;
