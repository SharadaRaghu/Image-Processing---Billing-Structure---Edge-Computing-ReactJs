import React from "react";

import "./Groceries.css";
import { AiFillCaretRight } from "react-icons/ai";

import Grocery from "./Grocery/Grocery";
// import { Button } from "carbon-components-react";
// import { Icon } from "carbon-components-react";
import { Button } from "react-bootstrap";
var price_value;
var new_value;

const Groceries = (props) => {
  return (
    <div className="table-button-group">
      <div className="groceries-table">
        <table className="bx--data-table-v2">
          <thead>
            <tr>
              <th>
                <span className="bx--table-header-label">Product ID</span>
              </th>
              <th>
                <span className="bx--table-header-label">Name of Product</span>
              </th>
              <th>
                <span className="bx--table-header-label">Quantity</span>
              </th>
              <th>
                <span className="bx--table-header-label">Cost of product</span>
              </th>
              <th>
                <span className="bx--table-header-label">
                  Final Cost of product
                </span>
              </th>
              <th>
                <span className="bx--table-header-label"></span>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.groceries.map((grocery) => {
              price_value = grocery.price.toString();
              // new_value=price_value;
              return (
                <Grocery
                  key={grocery.id}
                  name={grocery.name}
                  quantity={grocery.quantity}
                  price={grocery.price.toString()}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="pay-now-button-container">
        {/* <a class="waves-effect waves-light btn"> */}
        <Button className="pay-now-button">
          Pay Now
          {/* <i class="material-icons"></i> */}
          <AiFillCaretRight className="arrow-right" fill="white" />
        </Button>
        {/* </a> */}
      </div>
    </div>
  );
};

export default Groceries;
