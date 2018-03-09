import { combineReducers } from "redux";
import { getType } from "typesafe-actions";

import { RootAction } from "../../../root-action";
import * as actions from "../actions";

export type State = {
  readonly reduxCounter: number;
};

export const reducer = combineReducers<State, RootAction>({
  reduxCounter: (state = 0, action) => {
    switch (action.type) {
      case getType(actions.initCounter):
        return 0;

      case getType(actions.incrementCounter):
        return state + 1;

      case getType(actions.updateCounter):
        return action.payload;
    }

    return state;
  }
});
