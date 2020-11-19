import { InferValueTypes } from "../../../types/common";
import { TaskInfo } from "../../../types/tasks";

import { ChosenTaskIdActionTypes } from './action-types';
import * as actions from './action-creators';

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export type ChosenTaskIdState = TaskInfo['id'];

const initialState: ChosenTaskIdState = '';

export default function chosenTaskIdReducer(state = initialState, action: ActionTypes): ChosenTaskIdState {
    switch (action.type) {
        case (ChosenTaskIdActionTypes.SET_ID):
            return action.taskId;
        case (ChosenTaskIdActionTypes.RESET_ID):
            return '';
        default:
            return state;
    }
};
