import { TaskInfo, TaskStatus } from "../../../types/tasks";
import { TaskListActionTypes } from "./action-types";

export function updateTaskStatus(
    taskId: TaskInfo["id"],
    newStatus: TaskStatus
) {
    return {
        type: TaskListActionTypes.CHANGE_TASK_STATUS,
        taskId,
        newStatus,
    };
}
