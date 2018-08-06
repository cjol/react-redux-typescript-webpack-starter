import { HomeScreen } from "./HomeScreen";
import * as React from "react";
import { Provider } from "react-redux";
import { Store } from "redux";

interface Props {
  store: Store<any>;
}

export class App extends React.Component<Props, {}> {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
  }
}
