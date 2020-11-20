import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCn } from "bem-react-classname";

import TaskPane from "../ui/task-pane";
import Label from "../ui/label";

import { TaskInfo } from "../../../types/tasks";

import { sortTasksByImportance } from "../../../utils/tasks";
import { formatAssigneeName } from "../../../utils/formatters";

import { selectChosenTaskId } from "../../../redux/store/chosen-task-id/selectors";
import { setChosenTaskId } from "../../../redux/store/chosen-task-id/action-creators";

import "./styles.scss";

type Props = {
    taskGroup: TaskInfo[];
};

const cn = createCn("task-pane-group");

const TaskPaneGroup: React.FC<Props> = ({ taskGroup }) => {
    const dispatch = useDispatch();
    const chosenTaskId = useSelector(selectChosenTaskId);

    const tasksSortedByImportance = useMemo(
        () => sortTasksByImportance(taskGroup),
        [taskGroup]
    );

    const handleTaskPaneClick = useCallback(
        (taskId: TaskInfo["id"]) => dispatch(setChosenTaskId(taskId)),
        [dispatch]
    );

    const renderTask = useCallback(
        (taskInfo: TaskInfo) => (
            <TaskPane
                className={cn("task")}
                taskInfo={taskInfo}
                key={taskInfo.id}
                isChosen={taskInfo.id === chosenTaskId}
                onClick={handleTaskPaneClick}
            />
        ),
        [chosenTaskId, handleTaskPaneClick]
    );

    return (
        <div className={cn()}>
            <Label className={cn("assignee-name")}>
                {formatAssigneeName(taskGroup[0].assignee)}
            </Label>
            {tasksSortedByImportance.map(renderTask)}
        </div>
    );
};

export default React.memo(TaskPaneGroup);
