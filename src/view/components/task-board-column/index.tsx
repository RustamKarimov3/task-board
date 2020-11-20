import React, { useCallback, useMemo } from "react";
import { DragObjectWithType, useDrop } from "react-dnd";
import { useSelector } from "react-redux";
import { createCn } from "bem-react-classname";

import TaskPaneGroup from "../task-pane-group";
import Label from "../ui/label";

import { TaskInfo, TaskStatus } from "../../../types/tasks";
import { StoreState } from "../../../redux/store-type";

import { TaskStatusTitles } from "../../../constants/tasks";
import { ItemTypes } from "../../../constants/dnd-items";

import { makeTasksByStatusSelector } from "../../../redux/store/taskList/selectors";

import { groupTasksByAssigneeId } from "../../../utils/tasks";

import "./styles.scss";

type Props = {
    status: TaskStatus;
    className?: string;
};

const TaskBoardColumn: React.FC<Props> = ({ status, className }) => {
    const cn = useMemo(() => createCn("task-board-column", className), [
        className,
    ]);
    const selectTasksByStatus = useMemo(makeTasksByStatusSelector, []);
    const memoizedTasksByStatusSelector = useCallback(
        (state: StoreState) => selectTasksByStatus(state, status),
        [status, selectTasksByStatus]
    );

    const tasksByStatus = useSelector(memoizedTasksByStatusSelector);

    const [{ highlited }, drop] = useDrop<
        DragObjectWithType,
        Pick<TaskInfo, "status">,
        { highlited: boolean }
    >({
        accept: ItemTypes.TASK,
        canDrop: (_, monitor) => {
            return monitor.getItem()?.status !== status;
        },
        drop: () => ({ status }),
        collect: (monitor) => ({
            highlited: monitor.canDrop(),
        }),
    });

    const tasksGroupedByAssigneeId = useMemo(
        () => groupTasksByAssigneeId(tasksByStatus),
        [tasksByStatus]
    );

    const assigneeIds = useMemo(() => Object.keys(tasksGroupedByAssigneeId), [
        tasksGroupedByAssigneeId,
    ]);

    const renderTaskGroupByAssignId = useCallback(
        (assigneeId: string) =>
            tasksGroupedByAssigneeId[assigneeId] && (
                <TaskPaneGroup
                    taskGroup={tasksGroupedByAssigneeId[assigneeId]}
                    key={assigneeId}
                />
            ),
        [tasksGroupedByAssigneeId]
    );

    return (
        <div className={cn({ highlited })} ref={drop}>
            <Label className={cn("title")} isBold={true} size="m">
                {TaskStatusTitles[status]}
            </Label>
            <div>{assigneeIds.map(renderTaskGroupByAssignId)}</div>
        </div>
    );
};

export default React.memo(TaskBoardColumn);
