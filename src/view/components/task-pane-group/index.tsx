import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCn } from 'bem-react-classname';

import TaskPane from '../ui/task-pane';

import { TaskInfo } from '../../../types/tasks';

import { sortTasksByImportance } from '../../../utils/tasks';

import { selectChosenTaskInfo } from '../../../redux/chosenTaskInfo/selectors';
import { setChosenTaskInfo } from '../../../redux/chosenTaskInfo/action-creators';

import './styles.scss';

type Props = {
    taskGroup: TaskInfo[];
}

const cn = createCn('task-pane-group');

const TaskPaneGroup: React.FC<Props> = ({ taskGroup }) => {
    const dispatch = useDispatch();
    const chosenTaskInfo = useSelector(selectChosenTaskInfo);

    const tasksSortedByImportance = useMemo(
        () => sortTasksByImportance(taskGroup),
        [taskGroup]
    );

    const handleTaskPaneClick = useCallback(
        (taskInfo) => dispatch(setChosenTaskInfo(taskInfo)),
        [dispatch]
    )


    const renderTask = useCallback(
        (taskInfo: TaskInfo) => (
            <TaskPane
                className={ cn('task') }
                taskInfo={ taskInfo }
                key={ taskInfo.id }
                isChosen={ taskInfo.id === chosenTaskInfo?.id }
                onClick={ handleTaskPaneClick }
            />
        ),
        [chosenTaskInfo, handleTaskPaneClick]
    );


    return (
        <div className={ cn() }>
            { tasksSortedByImportance.map(renderTask) }
        </div>
    );
}

export default React.memo(TaskPaneGroup);