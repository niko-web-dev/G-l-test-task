import React from "react";
import { withStore } from "../../state/withStore";

import "./product-list.scss";

import { Product } from "../product";
import {ControlBtns} from "../controlBtns";


class ProductList extends React.Component {
  render() {
    const { products, dispatch } = this.props;

    return (
      <>
        <ControlBtns
          products={products}
          dispatch={dispatch}
        />
        <div className="product-list">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </>
    );
  }
}

export default withStore("products", (data) => data)(ProductList);
