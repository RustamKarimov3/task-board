import { TaskInfo } from "../../types/tasks";

import { TaskActionTypes } from "./action-types";

export function chooseTask(taskInfo: TaskInfo) {
    return {
        type: TaskActionTypes.CHOOSE_TASK,
        taskInfo,
    }
}