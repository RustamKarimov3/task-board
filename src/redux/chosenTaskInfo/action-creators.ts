import { TaskInfo } from "../../types/tasks";

import { ChosenTaskInfoActionTypes } from "./action-types";

export function setChosenTaskInfo(taskInfo: TaskInfo) {
    return {
        type: ChosenTaskInfoActionTypes.SET_CHOSEN_TASK_INFO,
        taskInfo,
    }
}

export function deleteChosenTaskInfo() {
    return {
        type: ChosenTaskInfoActionTypes.DELETE_CHOSEN_TASK_INFO,
    }
}