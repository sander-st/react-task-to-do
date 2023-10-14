import { createContext } from "react";
import { useReducerTodo } from "../hook/useReducerTodo";

export const ProviderContextTask = createContext();

export const ProviderTask = ({ children }) => {
  const { stateTodos, handleNewTodo, handleDeletTodo } = useReducerTodo();

  return (
    <ProviderContextTask.Provider
      value={{ stateTodos, handleNewTodo, handleDeletTodo }}>
      {children}
    </ProviderContextTask.Provider>
  );
};
