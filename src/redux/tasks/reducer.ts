import { TASKS } from "../../constants/tasks";
import { TaskInfo } from "../../types/tasks";

export type TaskState = {
    tasklist: Array<TaskInfo>;
}

const initialState: TaskState = {
    tasklist: TASKS,
}

export default function taskReducer(state = initialState): TaskState {
    return state;
}