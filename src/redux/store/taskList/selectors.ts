import { createSelector } from 'reselect';

import { TaskStatus } from '../../../types/tasks';
import { StoreState } from '../../store-type';

export const selectTaskList = (state: StoreState) => state.taskList;

const selectTaskListByStatus = (state: StoreState, taskStatus: TaskStatus) => (
    state.taskList?.filter(task => task.status === taskStatus )
);

export const makeTasksByStatusSelector = () => createSelector(
    selectTaskListByStatus,
    (taskList) => taskList,
);
