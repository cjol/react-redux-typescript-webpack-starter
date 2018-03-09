import * as React from "react";
import * as ReactDOM from "react-dom";

import "./rxjs-imports";

import { App } from "./features/app/components";
import { store, epicMiddleware } from "./store";

const renderRoot = (app: JSX.Element) => {
  ReactDOM.render(app, document.getElementById("root"));
};

if (process.env.NODE_ENV === "production") {
  renderRoot(<App store={store} />);
} else {
  const AppContainer = require("react-hot-loader").AppContainer;
  renderRoot(
    <AppContainer>
      <App store={store} />
    </AppContainer>
  );

  if (module.hot) {
    // app
    module.hot.accept("./features/app/components", async () => {
      const NextApp = (await System.import("./features/app/components")).App;
      renderRoot(
        <AppContainer>
          <NextApp store={store} />
        </AppContainer>
      );
    });

    // reducers
    module.hot.accept("./root-reducer", () => {
      const newRootReducer = require("./root-reducer").default;
      store.replaceReducer(newRootReducer);
    });

    // epics
    module.hot.accept("./root-epic", () => {
      const newRootEpic = require("./root-epic").default;
      epicMiddleware.replaceEpic(newRootEpic);
    });
  }
}
