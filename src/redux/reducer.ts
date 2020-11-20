import { combineReducers } from "redux";

import taskListReducer from "./store/taskList/reducer";
import chosenTaskInfoReducer from "./store/chosen-task-id/reducer";
import { StoreState } from "./store-type";

export default combineReducers<StoreState>({
    taskList: taskListReducer,
    chosenTaskId: chosenTaskInfoReducer,
});
