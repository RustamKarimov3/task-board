import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCn } from 'bem-react-classname';

import TaskBoardColumn from '../../components/task-board-column';
import TaskFullInfoPane from '../../components/task-full-info-pane';

import { TaskStatus } from '../../../types/tasks';

import { TaskStatuses } from '../../../constants/tasks';

import { selectChosenTaskInfo } from '../../../redux/common-selectors';
import { resetChosenTaskId } from '../../../redux/store/chosen-task-id/action-creators';


import './styles.scss';

const taskStatusesAsArray = Object.keys(TaskStatuses);

const renderTaskBoardColumn = (taskStatus: TaskStatus) => <TaskBoardColumn status={ taskStatus } key={ taskStatus } />;

const cn = createCn('task-board');

const TaskBoard: React.FC = () => {
    const dispatch = useDispatch();
    const chosenTaskInfo = useSelector(selectChosenTaskInfo)

    const handleFullTaskInfoPaneClose = useCallback(
        () => dispatch(resetChosenTaskId()),
        [dispatch],
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