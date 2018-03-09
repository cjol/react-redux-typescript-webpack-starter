import * as React from "react";
import { App } from "../App";

test("App renders without crashing", () => {
  <App store={null} />;
});
