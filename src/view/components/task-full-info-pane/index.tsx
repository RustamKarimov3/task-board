import React, { useMemo } from 'react';
import { createCn } from 'bem-react-classname';

import Label from '../ui/label';

import { TaskInfo } from '../../../types/tasks';

import './styles.scss';

type Props = {
    taskInfo: TaskInfo;
    onCloseButtonClick: () => void;
    className?: string;
}

const TaskFullInfoPane: React.FC<Props> = ({ taskInfo, onCloseButtonClick, className }) => {
    const cn = useMemo(() => createCn('task-full-info-pane', className), [className]);

    return (
        <div className={ cn() }>
            <button onClick={ onCloseButtonClick }>close</button>
            <Label isBold={ true } text={ taskInfo?.taskName } />
            <Label isBold={ true } text={ taskInfo?.id } />
            <Label isBold={ true } text={ taskInfo?.assignee?.firstName } />
        </div>
    );
}

export default React.memo(TaskFullInfoPane);