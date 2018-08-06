import { combineEpics, Epic } from "redux-observable";
import { RootAction } from "./root-action";
import { RootState } from "./root-reducer";

export const rootEpic = combineEpics(...Object.values({}));
