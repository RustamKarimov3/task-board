import { combineReducers } from 'redux';

import taskListReducer from './taskList/reducer';
import chosenTaskInfoReducer from './chosenTaskInfo/reducer';
import { StoreState } from './store-type';

export default combineReducers<StoreState>({
    taskList: taskListReducer,
    chosenTaskInfo: chosenTaskInfoReducer,
});