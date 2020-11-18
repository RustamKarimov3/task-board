import { createSelector } from 'reselect';

import { TaskStatus } from '../../types/tasks';
import { StoreState } from '../store-type';

const selectTasksByStatus = (state: StoreState, taskStatus: TaskStatus) => (
    state.taskList?.filter(task => task.status === taskStatus )
);

export const makeTasksByStatusSelector = () => createSelector(
    selectTasksByStatus,
    (tasks) => tasks,
);
