import { cloneDeep } from "lodash";

import { TASKS } from "../../constants/tasks";
import { InferValueTypes } from "../../types/common";
import { TaskInfo } from "../../types/tasks";

import * as actions from './action-creators';
import { TaskActionTypes } from './action-types';

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export type TaskState = {
    tasklist: Array<TaskInfo>;
    chosenTaskInfo: TaskInfo;
}

const initialState: TaskState = {
    tasklist: TASKS,
    chosenTaskInfo: null,
}

export default function taskReducer(state = initialState, action: ActionTypes): TaskState {
    switch (action.type) {
        case (TaskActionTypes.CHOOSE_TASK):
            return {
                ...cloneDeep(state),
                chosenTaskInfo: action.taskInfo,
            }
        default:
            return state;
    }
};
