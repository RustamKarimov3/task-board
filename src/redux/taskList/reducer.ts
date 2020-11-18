import { TASKS } from "../../constants/tasks";

import { TaskInfo } from "../../types/tasks";

export type TaskListState = Array<TaskInfo>;

const initialState: TaskListState = TASKS;

export default function taskListReducer(state = initialState): TaskListState {
    return state;
};
