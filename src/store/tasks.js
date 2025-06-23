import { createAction, createReducer,createSlice } from "@reduxjs/toolkit";


// Action type
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const COMPLETED_TASK = "COMPLETED_TASK";

// Action
export const addTask = createAction("ADD_TASK");
export const removeTask = createAction("REMOVE_TASK");
export const completedTask = createAction("COMPLETED_TASK");

// Reducer

let id = 0;

export default createReducer([], {
  [addTask.type]: (state, action) => {
    state.push({ id: id++, task: action.payload.task, complete: false });
  },

  [removeTask.type]: (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload.id);
    state.splice(index, 1);
  },

  [completedTask.type]: (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload.id);
    state[index].complete = true;
  },
});
