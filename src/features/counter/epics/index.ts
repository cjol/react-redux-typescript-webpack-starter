import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";

import { Epic } from "redux-observable";
import { interval } from "rxjs/observable/interval";
import { isActionOf } from "typesafe-actions";

import { RootAction } from "../../../root-action";
import { RootState } from "../../../root-reducer";
import * as actions from "../actions";

export const initCounter: Epic<RootAction, RootState> = action$ =>
  action$
    .filter(isActionOf(actions.initCounter))
    .switchMap(x => interval(1000))
    .map(actions.incrementCounter);
