import React from 'react';
import { createCn } from 'bem-react-classname';

import TaskBoardColumn from '../../components/task-board-column';

import { TaskStatus } from '../../../types/tasks';

import './styles.scss';

const cn = createCn('task-board');

const TaskBoard: React.FC = () => (
    <div className={ cn() }>
        <TaskBoardColumn title="Первый пашел" status={ TaskStatus.Plan } />
        <TaskBoardColumn title="Первый пашел" status={ TaskStatus.In_progress } />
        <TaskBoardColumn title="Первый пашел" status={ TaskStatus.Testing } />
        <TaskBoardColumn title="Первый пашел" status={ TaskStatus.Done } />
    </div>
);

export default TaskBoard;