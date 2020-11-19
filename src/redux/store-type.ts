import { TaskListState } from "./store/taskList/reducer";
import { ChosenTaskIdState } from "./store/chosen-task-id/reducer";

export type StoreState = {
    taskList: TaskListState;
    chosenTaskId: ChosenTaskIdState;
};