import { TASKS } from "../../constants/tasks";
import { Task } from "../../types/tasks";

export type TasksState = {
    list: Array<Task>;
}

const initialState: TasksState = {
    list: TASKS,
}

export default function tasksReducer(state = initialState): TasksState {
    return state;
}