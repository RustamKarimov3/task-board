import React, { useCallback, useContext, useMemo } from 'react';
import { createCn } from 'bem-react-classname';

import TaskPane from '../ui/task-pane';

import { TaskInfo } from '../../../types/tasks';

import { sortTasksByImportance } from '../../../utils/tasks';

import { ChosenTaskInfoContext } from '../../contexts/chosen-task-info-context';

import './styles.scss';

type Props = {
    taskGroup: TaskInfo[];
}

const cn = createCn('task-pane-group');

const TaskPaneGroup: React.FC<Props> = ({ taskGroup }) => {
    const tasksSortedByImportance = useMemo(
        () => sortTasksByImportance(taskGroup),
        [taskGroup]
        );

    const { chosenTaskInfo , setChosenTaskInfo } = useContext(ChosenTaskInfoContext);

    const renderTask = useCallback(
        (taskInfo: TaskInfo) => (
            <TaskPane
                className={ cn('task') }
                taskInfo={ taskInfo }
                key={ taskInfo.id }
                isChosen={ taskInfo.id === chosenTaskInfo?.id } // TODO: пофиксить сhaining
                onClick={ setChosenTaskInfo }
            />
        ),
        [chosenTaskInfo, setChosenTaskInfo]
    );


    return (
        <div className={ cn() }>
            { tasksSortedByImportance.map(renderTask) }
        </div>
    );
}

export default React.memo(TaskPaneGroup);