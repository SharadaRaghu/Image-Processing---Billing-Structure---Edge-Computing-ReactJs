import React from "react";

const Grocery = (props) => {
  const id = [];
  if (props.name === "Colgate_Large") {
    id.props = 101;
  } else if (props.name === "Colgate_Small") {
    id.props = 102;
  } else {
    id.props = 103;
  }

  const pri = [];
  if (props.name === "Colgate_Large") {
    pri.props = 50;
  } else if (props.name === "Colgate_Small") {
    pri.props = 10;
  } else {
    pri.props = 80;
  }

  var b = (
    <tr onClick={props.click}>
      <td>{id.props}</td>
      <td>{props.name}</td>
      <td>{props.quantity}</td>
      <td>Rs{pri.props}</td>
      <td>Rs{props.price}</td>
    </tr>
  );
  return b;
};

export default Grocery;
