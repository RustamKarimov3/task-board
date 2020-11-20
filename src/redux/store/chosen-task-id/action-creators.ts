import { TaskInfo } from "../../../types/tasks";

import { ChosenTaskIdActionTypes } from "./action-types";

export function setChosenTaskId(taskId: TaskInfo["id"]) {
    return {
        type: ChosenTaskIdActionTypes.SET_ID,
        taskId,
    };
}

export function resetChosenTaskId() {
    return {
        type: ChosenTaskIdActionTypes.RESET_ID,
    };
}
