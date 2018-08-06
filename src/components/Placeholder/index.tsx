import * as React from "react";

interface Props {
  description?: string;
  children?: React.ReactElement<any>;
  inline?: boolean;
  orientation?: "row" | "column";
}

export const Placeholder: React.SFC<Props> = props => {
  if (props.inline) {
    return (
      <span style={{ border: "1px solid grey", padding: 2 }}>
        [{props.description}]
      </span>
    );
  }
  return (
    <div
      style={{
        border: "1px solid grey",
        padding: 5
      }}
    >
      <div style={{}}>[{props.description}]</div>
      <div
        style={{
          display: "flex",
          flexDirection: props.orientation || "column"
        }}
      >
        {props.children}
      </div>
    </div>
  );
};
