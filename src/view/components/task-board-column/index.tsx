import React, { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { createCn } from 'bem-react-classname';

import TaskPaneGroup from '../task-pane-group';
import Label from '../ui/label';

import { TaskStatus } from '../../../types/tasks';
import { StoreState } from '../../../redux/store-type';

import { TaskStatusDictionary } from '../../../constants/tasks';

import { makeTasksByStatusSelector } from '../../../redux/taskList/selectors';

import { groupTasksByAssigneeId } from '../../../utils/tasks';


import './styles.scss';

type Props = { status: TaskStatus };

const cn = createCn('task-board-column');

const TaskBoardColumn: React.FC<Props> = ({ status }) => {
    const selectTasksByStatus = useMemo(makeTasksByStatusSelector, []);
    const memoizedTasksByStatusSelector = useCallback(
        (state: StoreState) => selectTasksByStatus(state, status),
        [status, selectTasksByStatus]
    );

    const tasksByStatus = useSelector(memoizedTasksByStatusSelector);

    const tasksGroupedByAssigneeId = useMemo(() => groupTasksByAssigneeId(tasksByStatus), [tasksByStatus]);

    const renderTaskGroupByAssignId = useCallback(
        (assigneeId: string) => <TaskPaneGroup taskGroup={ tasksGroupedByAssigneeId[assigneeId] } key={assigneeId} />,
        [tasksGroupedByAssigneeId]
    );

    const assigneeIds = useMemo(() => Object.keys(tasksGroupedByAssigneeId), [tasksGroupedByAssigneeId])

    return (
        <div className={ cn() }>
            <Label isBold={ true } text={ TaskStatusDictionary[status] } size='l' />
            <div>
                { assigneeIds.map(renderTaskGroupByAssignId) }
            </div>
        </div>
    );
}

export default React.memo(TaskBoardColumn);