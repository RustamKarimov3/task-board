import React, { useCallback, useMemo } from 'react';
import { createCn } from 'bem-react-classname';

import Label from '../label';

import { TaskInfo } from '../../../../types/tasks';

import './styles.scss';

type Props = {
    taskInfo: TaskInfo;
    isChosen?: boolean;
    onClick: (taskInfo: TaskInfo) => void;
    className?: string;
}

const TaskPane: React.FC<Props> = ({ taskInfo, isChosen, onClick, className }) => {
    const cn = useMemo(() => createCn('task', className), [className]);

    const handleClick = useCallback(
        () => { onClick(taskInfo); },
        [onClick, taskInfo],
    )

    return (
        <div className={ cn({ chosen: isChosen }) } onClick={ handleClick }>
            <Label isBold={ true } text={ taskInfo.taskName } />
        </div>
    );
}

export default React.memo(TaskPane);