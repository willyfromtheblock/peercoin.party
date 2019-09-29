import React from "react";
import BlockTable from "./blockTable";
import BlockTableAddress from "./blockTableAddress";

const TableSwitch = props => {
  console.log(props.searchAddress, props.searchAddress === undefined);
  if (props.searchAddress === undefined) {
    return <BlockTable {...props} />;
  } else {
    return <BlockTableAddress {...props} />;
  }
};

export default TableSwitch;
