import React, { useMemo } from "react";
import { createCn } from "bem-react-classname";
import { VscChromeClose } from "react-icons/vsc";

import TaskInfoField from "../ui/task-info-field";

import { TaskInfo } from "../../../types/tasks";

import {
    TaskImportanceNameByCoefficient,
    TaskStatusTitles,
} from "../../../constants/tasks";

import { formatDate } from "../../../utils/date";

import "./styles.scss";

type Props = {
    taskInfo: TaskInfo;
    onCloseButtonClick: () => void;
    className?: string;
};

const TaskFullInfoPane: React.FC<Props> = ({
    taskInfo,
    onCloseButtonClick,
    className,
}) => {
    const cn = useMemo(() => createCn("task-full-info-pane", className), [
        className,
    ]);

    return (
        <div className={cn()}>
            <VscChromeClose
                onClick={onCloseButtonClick}
                cursor="pointer"
                className={cn("icon")}
            />
            <div className={cn("task-info")}>
                <TaskInfoField
                    fieldName="Task-name"
                    fieldValue={taskInfo?.taskName}
                />
                <TaskInfoField fieldName="Task-id" fieldValue={taskInfo?.id} />
                <TaskInfoField
                    fieldName="Assignee"
                    fieldValue={`${taskInfo?.assignee.lastName} ${taskInfo?.assignee.firstName}`}
                />
                <TaskInfoField
                    fieldName="Importance"
                    fieldValue={
                        TaskImportanceNameByCoefficient[taskInfo?.importance]
                    }
                />
                <TaskInfoField
                    fieldName="Status"
                    fieldValue={TaskStatusTitles[taskInfo?.status]}
                />
                <TaskInfoField
                    fieldName="Date"
                    fieldValue={formatDate(taskInfo.date)}
                />
            </div>
        </div>
    );
};

export default React.memo(TaskFullInfoPane);
