import { createAction } from "typesafe-actions";

export const initCounter = createAction("COUNTER_INIT");

export const incrementCounter = createAction("COUNTER_INCREMENT");

export const updateCounter = createAction(
  "COUNTER_UPDATE",
  (amount: number) => ({
    type: "COUNTER_UPDATE",
    payload: amount
  })
);
