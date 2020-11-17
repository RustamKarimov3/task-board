import React, { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { createCn } from 'bem-react-classname';

import TaskPaneGroup from '../task-pane-group';
import Label from '../ui/label';

import { TaskStatus } from '../../../types/tasks';
import { StoreState } from '../../../redux/store-type';

import { makeTasksByStatusSelector } from '../../../redux/tasks/selectors';

import { groupTasksByAssigneeId } from '../../../utils/tasks';

import './styles.scss';

type Props = {
    title: string;
    status: TaskStatus;
}

const cn = createCn('task-board-column');

const TaskBoardColumn: React.FC<Props> = ({ title, status }) => {
    const selectTasksByStatus = useMemo(makeTasksByStatusSelector, []);
    const memoizedTasksByStatusSelector = useCallback(
        (state: StoreState) => selectTasksByStatus(state, status),
        [status, selectTasksByStatus]
    );

    const tasksByStatus = useSelector(memoizedTasksByStatusSelector);

    const tasksGroupedByAssigneeId = useMemo(() => groupTasksByAssigneeId(tasksByStatus), [tasksByStatus]);

    const renderTaskGroup = useCallback(
        (assigneeId: string) => <TaskPaneGroup taskGroup={ tasksGroupedByAssigneeId[assigneeId] } key={assigneeId} />,
        [tasksGroupedByAssigneeId]
    );

    return (
        <div className={ cn() }>
            <Label isBold={ true } text={ title } size='l' />
            <div>
                { Object.keys(tasksGroupedByAssigneeId).map(renderTaskGroup) }
            </div>
        </div>
    );
}

export default React.memo(TaskBoardColumn);