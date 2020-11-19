import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { DragObjectWithType, useDrag } from 'react-dnd';
import { createCn } from 'bem-react-classname';

import Label from '../label';

import { TaskInfo } from '../../../../types/tasks';

import { TaskImportanceNameByCoefficient } from '../../../../constants/tasks';
import { ItemTypes } from '../../../../constants/dnd-items';

import { updateTaskStatus } from '../../../../redux/store/taskList/action-creators';

import './styles.scss';


type Props = {
    taskInfo: TaskInfo;
    isChosen?: boolean;
    onClick: (taskId: TaskInfo['id']) => void;
    className?: string;
}

const TaskPane: React.FC<Props> = ({ taskInfo, isChosen, onClick, className }) => {
    const dispatch = useDispatch();
    const cn = useMemo(() => createCn('task', className), [className]);

    const handleTaskDragEnd = useCallback(
        (taskId: TaskInfo['id'], newStatus: TaskInfo['status']) => {
            dispatch(updateTaskStatus(taskId, newStatus))
        },
        [dispatch],
    )

    const [, drag] = useDrag<DragObjectWithType & Partial<TaskInfo>, {}, {}>({
        item: {
            type: ItemTypes.TASK,
            id: taskInfo.id,
            status: taskInfo.status,
        },
        end: ({ id }, monitor) => {
            if (!monitor.getDropResult()?.status) {
                return;
            }

            const newTaskStatus = monitor.getDropResult().status;

            monitor.didDrop() && handleTaskDragEnd(id, newTaskStatus)
        },
      });

    const handleClick = useCallback(
        () => { onClick(taskInfo.id); },
        [onClick, taskInfo],
    )

    return (
        <div
            className={ cn({
                chosen: isChosen,
                importance: TaskImportanceNameByCoefficient[taskInfo.importance]
            }) }
            ref={ drag }
            onClick={ handleClick }
        >
            <Label className={ cn('label') } isBold={ true } text={ taskInfo.id } />
            <Label className={ cn('label') } text={ taskInfo.taskName } />
        </div>
    );
}

export default React.memo(TaskPane);