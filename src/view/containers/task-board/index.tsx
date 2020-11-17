import React, { useCallback, useContext } from 'react';
import { createCn } from 'bem-react-classname';

import TaskBoardColumn from '../../components/task-board-column';
import TaskFullInfoPane from '../../components/task-full-info-pane';

import { ChosenTaskInfoContext } from '../../contexts/chosen-task-info-context';

import { TaskStatus } from '../../../types/tasks';

import { TaskStatuses } from '../../../constants/tasks';

import './styles.scss';

const taskStatusesAsArray = Object.keys(TaskStatuses);

const renderTaskBoardColumn = (taskStatus: TaskStatus) => <TaskBoardColumn status={ taskStatus } />;

const cn = createCn('task-board');

const TaskBoard: React.FC = () => {
    const { chosenTaskInfo, setChosenTaskInfo } = useContext(ChosenTaskInfoContext);

    const handleFullTaskInfoPaneClose = useCallback(
        () => setChosenTaskInfo(null),
        [setChosenTaskInfo],
    );

    return (
        <div className={ cn() }>
                <div className={ cn('columns-wrapper') }>
                    <div className={ cn('columns') }>
                        { taskStatusesAsArray.map(renderTaskBoardColumn) }
                    </div>
                </div>
            { chosenTaskInfo && (
                <TaskFullInfoPane
                    className={ cn('task-full-info-pane') }
                    taskInfo={ chosenTaskInfo }
                    onCloseButtonClick={ handleFullTaskInfoPaneClose }
                />
            ) }
        </div>
    );
};

export default TaskBoard;