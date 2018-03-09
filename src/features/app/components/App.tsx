import * as React from "react";
import { Provider } from "react-redux";
import { Store } from "redux";

import { Counter } from "../../counter/containers";

interface Props {
  store: Store<any>;
}

export class App extends React.Component<Props, {}> {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Counter title="Connected Counter" />
      </Provider>
    );
  }
}
