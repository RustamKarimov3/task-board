import React, { useCallback, useMemo } from 'react';
import { createCn } from 'bem-react-classname';

import TaskPane from '../ui/task-pane';

import { TaskInfo } from '../../../types/tasks';

import { sortTasksByImportance } from '../../../utils/tasks';

import './styles.scss';

type Props = {
    taskGroup: TaskInfo[];
}

const cn = createCn('task-group');

const TaskPaneGroup: React.FC<Props> = ({ taskGroup }) => {
    const tasksSortedByImportance = useMemo(
        () => sortTasksByImportance(taskGroup),
        [taskGroup]
    );

    const renderTask = useCallback(
        (taskInfo) => <TaskPane taskInfo={ taskInfo } key={ taskInfo.id } />,
        []
    )

    return (
        <div className={ cn() }>
            { tasksSortedByImportance.map(renderTask) }
        </div>
    );
}

export default React.memo(TaskPaneGroup);