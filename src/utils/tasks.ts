import cloneDeep from "lodash/cloneDeep";

import { TaskInfosGroupedByAssigneeId, TaskInfo } from "../types/tasks";

export function sortTasksByImportance(tasks: Array<TaskInfo>): Array<TaskInfo> {
    return cloneDeep(tasks).sort((a, b) => b.importance - a.importance);
}

function sortTasksByAssigneeLastName(tasks: Array<TaskInfo>): Array<TaskInfo> {
    return cloneDeep(tasks).sort((a, b) =>
        a.assignee.lastName > b.assignee.lastName ? 1 : -1
    );
}

export function groupTasksByAssigneeId(
    tasks: Array<TaskInfo>
): TaskInfosGroupedByAssigneeId {
    return sortTasksByAssigneeLastName(tasks).reduce(
        (acc: TaskInfosGroupedByAssigneeId, current) => {
            const currentAssigneeId = current.assignee.id;

            if (!acc[currentAssigneeId]) {
                acc[currentAssigneeId] = [];
            }

            acc[currentAssigneeId].push(current);

            return acc;
        },
        {}
    );
}
