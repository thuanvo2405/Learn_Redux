import { addTask, removeTask, completedTask } from "./store/tasks";
import store from "./store/configureStore";

const unsubscribe = store.subscribe(() => {
  console.log("Updated: ", store.getState());
});

store.dispatch(addTask({ task: "This is new task 1" }));
store.dispatch(addTask({ task: "This is new task 2" }));
store.dispatch(completedTask({ id: 1 }));

store.dispatch(removeTask({ id: 0 }));
console.log(store.getState());
