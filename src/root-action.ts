import { getReturnOfExpression } from "utility-types";

import { actions as counter } from "Features/counter";

export { counter };

const returnsOfActions = Object.values({
  ...counter
}).map(getReturnOfExpression);

export type RootAction = typeof returnsOfActions[number];
