import React from 'react';
import { createCn } from 'bem-react-classname';
import { Label } from '../ui/label';

import './styles.scss';

type Props = {
    title: string;
}

const cn = createCn('task-board-column');

export const TaskBoardColumn: React.FC<Props> = ({ title = 'Колонка', children }) => (
    <div className={ cn() }>
        <Label isBold={ true } text={ title } />
        <div>
            {children}
        </div>
    </div>
)