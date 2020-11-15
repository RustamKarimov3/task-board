import { TASKS } from "../../constants/tasks";
import { Task } from "../../types/tasks";

export type TaskState = {
    list: Array<Task>;
}

const initialState: TaskState = {
    list: TASKS,
}

export default function taskReducer(state = initialState): TaskState {
    return state;
}