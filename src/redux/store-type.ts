import { TaskListState } from "./taskList/reducer";
import { ChosenTaskInfoState } from "./chosenTaskInfo/reducer";

export type StoreState = {
    taskList: TaskListState;
    chosenTaskInfo: ChosenTaskInfoState;
};