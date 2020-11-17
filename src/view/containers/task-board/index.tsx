import React, { useCallback, useContext } from 'react';
import { createCn } from 'bem-react-classname';

import TaskBoardColumn from '../../components/task-board-column';
import TaskFullInfoPane from '../../components/task-full-info-pane';

import { ChosenTaskInfoContext } from '../../contexts/task-context';

import { TaskStatus } from '../../../types/tasks';

import './styles.scss';

const cn = createCn('task-board');

const TaskBoard: React.FC = () => {
    const { chosenTaskInfo, setChosenTaskInfo } = useContext(ChosenTaskInfoContext);

    const handleFullTaskInfoPaneClose = useCallback(
        () => setChosenTaskInfo(null),
        [setChosenTaskInfo],
    );

    // TODO: не забыть поменять имена для колонок согласно статусам
    return (
        <div className={ cn() }>
                <div className={ cn('columns-wrapper') }>
                    <div className={ cn('columns') }>
                        <TaskBoardColumn title="Первый пашел" status={ TaskStatus.Plan } />
                        <TaskBoardColumn title="Первый пашел" status={ TaskStatus.In_progress } />
                        <TaskBoardColumn title="Первый пашел" status={ TaskStatus.Testing } />
                        <TaskBoardColumn title="Первый пашел" status={ TaskStatus.Done } />
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