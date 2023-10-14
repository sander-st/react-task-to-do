import { useReducer, useEffect } from "react";
import { taskReducer } from "../taskReducer";

export const useReducerTodo = () => {
  const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [stateTodos, dispatch] = useReducer(taskReducer, initialState, init);

  // save data to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(stateTodos));
  }, [stateTodos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "add-todo",
      taskdata: todo,
    };

    dispatch(action);
  };

  const handleDeletTodo = (id) => {
    const action = {
      type: "delet-todo",
      taskdata: {
        id,
      },
    };

    dispatch(action);
  };

  return {
    stateTodos,
    handleNewTodo,
    handleDeletTodo,
  };
};
