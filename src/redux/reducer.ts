import { combineReducers } from 'redux';

import taskReducer from './tasks/reducer';
import { StoreState } from './store-type';

export default combineReducers<StoreState>({ // TODO: возможно combineReducers мне не нужен и можно будет его удалить
    tasks: taskReducer,
});