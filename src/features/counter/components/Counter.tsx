import * as React from "react";

interface Props {
  count: number;
  title: string;
  start: () => any;
}

export class Counter extends React.Component<Props, {}> {
  componentWillMount() {
    this.props.start();
  }

  render() {
    const { title, count } = this.props;
    return (
      <>
        {title && <h2>{title}</h2>}
        <div>Counter: {this.props.count}</div>
      </>
    );
  }
}
