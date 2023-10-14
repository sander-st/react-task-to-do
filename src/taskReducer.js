export const taskReducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return [...state, action.taskdata];

    case "delet-todo":
      return state.filter((todo) => todo.id !== action.taskdata.id);

    default:
      return state;
  }
};
