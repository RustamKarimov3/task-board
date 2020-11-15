import React from 'react';
import { createCn } from 'bem-react-classname';

import { TaskBoardColumn } from '../../components/task-board-column';

import './styles.scss';

const cn = createCn('task-board');

export const TaskBoard: React.FC = ({ children }) => (
    <div className={ cn() }>
        <TaskBoardColumn title="Первый пашел" />
        <TaskBoardColumn title="Первый пашел" />
        <TaskBoardColumn title="Первый пашел" />
        <TaskBoardColumn title="Первый пашел" />
    </div>
)