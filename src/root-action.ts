import { getReturnOfExpression } from "utility-types";

const returnsOfActions = Object.values({}).map(getReturnOfExpression);

export type RootAction = typeof returnsOfActions[number];
