import { addTask, removeTask, completedTask, fetchTodo } from "./store/tasks";
import store from "./store/configureStore";

const unsubscribe = store.subscribe(() => {
  console.log("Updated: ", store.getState());
});

store.dispatch(addTask("This is new task 1"));
store.dispatch(addTask("This is new task 2"));
store.dispatch(completedTask(1));

store.dispatch(fetchTodo());
store.dispatch(removeTask(0));
console.log(store.getState());
