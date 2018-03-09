import { combineEpics } from "redux-observable";

import { epics as counter } from "Features/counter";

export const rootEpic = combineEpics(
  ...Object.values({
    ...counter
  })
);
