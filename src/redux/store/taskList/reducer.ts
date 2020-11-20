import { cloneDeep } from "lodash";
import { TASKS } from "../../../constants/tasks";

import { InferValueTypes } from "../../../types/common";
import { TaskInfo } from "../../../types/tasks";

import * as actionCreators from "./action-creators";
import { TaskListActionTypes } from "./action-types";

type ActionTypes = ReturnType<InferValueTypes<typeof actionCreators>>;

export type TaskListState = Array<TaskInfo>;

const initialState: TaskListState = TASKS;

export default function taskListReducer(
    state = initialState,
    action: ActionTypes
): TaskListState {
    switch (action.type) {
        case TaskListActionTypes.CHANGE_TASK_STATUS:
            const clonedTaskList: TaskInfo[] = cloneDeep(state);
            const taskForUpdateIndex: number = state.findIndex(
                (task) => task.id === action.taskId
            );

            clonedTaskList[taskForUpdateIndex].status = action.newStatus;

            return clonedTaskList;
        default:
            return state;
    }
}
