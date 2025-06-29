import { createSlice } from "@reduxjs/toolkit";

let id = 0;

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: id++, task: action.payload.task, complete: false });
    },
    removeTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state.splice(index, 1);
    },

    completedTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].complete = true;
    },
  },
});

export const { addTask, removeTask, completedTask } = taskSlice.actions;
export default taskSlice.reducer;
