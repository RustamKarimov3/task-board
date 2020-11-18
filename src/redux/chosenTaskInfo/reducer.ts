import { InferValueTypes } from "../../types/common";
import { TaskInfo } from "../../types/tasks";

import { ChosenTaskInfoActionTypes } from './action-types';
import * as actions from './action-creators';

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export type ChosenTaskInfoState = TaskInfo;

const initialState: TaskInfo = null;

export default function chosenTaskInfoReducer(state = initialState, action: ActionTypes): ChosenTaskInfoState {
    switch (action.type) {
        case (ChosenTaskInfoActionTypes.SET_CHOSEN_TASK_INFO):
            return action.taskInfo;
        case (ChosenTaskInfoActionTypes.DELETE_CHOSEN_TASK_INFO):
            return null;
        default:
            return state;
    }
};
