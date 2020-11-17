import React, { useMemo } from 'react';
import { createCn } from 'bem-react-classname';

import Label from '../label';

import { TaskInfo } from '../../../../types/tasks';

import './styles.scss';

type Props = {
    taskInfo: TaskInfo;
    className?: string;
}

const TaskPane: React.FC<Props> = ({ taskInfo, className }) => {
    const cn = useMemo(() => createCn('task', className), [className]);

    return (
        <div className={ cn() }>
            <Label isBold={ true } text={ taskInfo.taskName } />
        </div>
    );
}

export default React.memo(TaskPane);