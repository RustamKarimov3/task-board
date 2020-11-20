import cloneDeep from "lodash/cloneDeep";
import { AssigneeInfo, TaskInfo } from "../types/tasks";

export function sortTasksByImportance(tasks: Array<TaskInfo>): Array<TaskInfo> {
  return cloneDeep(tasks).sort((a, b) => b.importance - a.importance);
}

export function groupTasksByAssigneeId(
  tasks: Array<TaskInfo>
): Record<AssigneeInfo["id"], TaskInfo[]> {
  return cloneDeep(tasks).reduce(
    (acc: Record<AssigneeInfo["id"], TaskInfo[]>, current) => {
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
