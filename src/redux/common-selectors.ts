import { createSelector } from 'reselect';

import { selectTaskList } from './store/taskList/selectors';
import { selectChosenTaskId } from './store/chosen-task-id/selectors';

export const selectChosenTaskInfo = createSelector(
    selectTaskList,
    selectChosenTaskId,
    (taskList, chosenTaskId) => taskList.find((task) => task.id === chosenTaskId),
);
