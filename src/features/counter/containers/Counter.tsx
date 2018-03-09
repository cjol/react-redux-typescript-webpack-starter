import { connect, Dispatch } from "react-redux";

import * as actions from "../actions";
import * as selectors from "../selectors";
import { counter as rootSelector } from "../../../root-selectors";
import { Counter as CounterComponent } from "../components";
import { RootState } from "../../../root-reducer";
import { bindActionCreators } from "redux";

const mapStateToProps = (root: RootState, ownProps: { title: string }) => {
  const state = rootSelector(root);

  return {
    count: selectors.getCounter(state)
  };
};

const mapDispatchToProps = {
  start: actions.initCounter
};

export const Counter = connect(mapStateToProps, mapDispatchToProps)(
  CounterComponent
);
