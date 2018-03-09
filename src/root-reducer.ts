import { combineReducers } from "redux";

import { reducer as counter, State as CounterState } from "Features/counter";
import { RootAction } from "./root-action";

export interface RootState {
  counter: CounterState;
}

export const rootReducer = combineReducers<RootState>({
  counter
});
